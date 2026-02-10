"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { GEO_DESIGN_DATA, type WindSpeedCategory } from "@/Data/geoData";

type PillProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

type StatusBadgeProps = {
  status: Status;
  value: React.ReactNode;
};

type Status = "pass" | "fail" | "warn";

type WindCategoryLabel = Exclude<WindSpeedCategory, "T10">;

type ResultRow = {
  label: string;
  span: string;
  windPressure: string;
  uplift: string;
  downforce: string;
  shear: string;
  upliftStatus: Status;
  upliftVal: string;
  downforceStatus: Status;
  downforceVal: string;
  shearStatus: Status;
  shearVal: string;
};

const Pill = ({ active, onClick, children }: PillProps) => (
  <Button
    variant="outline"
    type="button"
    onClick={onClick}
    className={cn(
      "flex-1 text-[13px] md:text-base text-[#BFBFBF] rounded-full h-11",
      active && "border border-[#FA4616] text-white"
    )}
  >
    {children}
  </Button>
);

const StatusBadge = ({ status, value }: StatusBadgeProps) => {
  const styles =
    status === "pass"
      ? "bg-[#0A7A1C]"
      : status === "fail"
      ? "bg-[#E11818]"
      : "bg-[#FF8A3D]";

  const glyph = status === "pass" ? "✓" : status === "fail" ? "✕" : "!";

  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "h-6 w-6 rounded-full flex items-center justify-center text-white text-[14px] leading-none",
          styles
        )}
      >
        {glyph}
      </div>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
};

export default function DualRailSystemsPage() {
  // PROJECT INFORMATION
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  // dual-rail systems
  const [mountingSystem, setMountingSystem] = useState("Hanger System");
  const [railType, setRailType] = useState("Omnia");

  // module size
  const [moduleWidth, setModuleWidth] = useState("1.4");
  const [moduleHeight, setModuleHeight] = useState("2.4");

  // roof type
  const [roofType, setRoofType] = useState("Gable");

  // ENVIRONMENTAL
  const [windCategory, setWindCategory] =
    useState<WindCategoryLabel>("T50");
  const [exposureCategory, setExposureCategory] = useState("B");
  const [snowLoad, setSnowLoad] = useState("0");

  // SYSTEM CONFIGURATION
  const [buildingHeight, setBuildingHeight] = useState("10");
  const [groundElevation, setGroundElevation] = useState("3");

  // ✅ NEW: wind speed input (placed alongside ground elevation as requested)
  const [windSpeed, setWindSpeed] = useState("0");

  const [roofSlope, setRoofSlope] = useState("");
  const [moduleWeight, setModuleWeight] = useState("35");
  const [numberOfRails, setNumberOfRails] = useState("2");

  const selectedCountry = useMemo(
    () => GEO_DESIGN_DATA.find((entry) => entry.countryCode === country) ?? null,
    [country],
  );

  const cityOptions = useMemo(
    () => selectedCountry?.cities ?? [],
    [selectedCountry],
  );

  const selectedCity = useMemo(
    () => cityOptions.find((city) => city.cityCode === location) ?? null,
    [cityOptions, location],
  );

  const windCategoryKey = useMemo<WindCategoryLabel | "">(() => {
    if (windCategory === "T50") return "T50";
    if (windCategory === "T200") return "T200";
    if (windCategory === "MRI 700") return "MRI 700";
    return "";
  }, [windCategory]);

  const roofSlopeOptions = useMemo(() => {
    if (roofType === "Gable") return ["0–7", "7–20", "20–27", "27–45"];
    if (roofType === "Monoslope") return ["3–10", "10–30"];
    return ["7–20", "20–27", "27–45"]; // Hip
  }, [roofType]);

  useEffect(() => {
    setRoofSlope((prev) =>
      roofSlopeOptions.includes(prev) ? prev : roofSlopeOptions[0] || ""
    );
  }, [roofSlopeOptions]);

  // keep location aligned with selected country
  useEffect(() => {
    if (!selectedCountry) {
      if (location !== "") {
        setLocation("");
      }
      return;
    }

    if (!selectedCity) {
      setLocation(selectedCountry.cities[0]?.cityCode ?? "");
    }
  }, [selectedCountry, selectedCity, location]);

  // hydrate ground elevation and wind speed from selected city + category
  useEffect(() => {
    if (!selectedCity || !windCategoryKey) {
      setGroundElevation("");
      setWindSpeed("");
      return;
    }

    setGroundElevation(String(selectedCity.elevationM ?? ""));
    const speed = selectedCity.wind?.[windCategoryKey];
    setWindSpeed(speed === undefined ? "" : String(speed));
  }, [selectedCity, windCategoryKey]);

  // RESULTS (UI rows)
  const resultsRows = useMemo<ResultRow[]>(
    () => [
      {
        label: "Zone 1",
        span: "1.60",
        windPressure: "-2173.58",
        uplift: "242.81",
        downforce: "242.81",
        shear: "2.43",
        upliftStatus: "pass",
        upliftVal: "68%",
        downforceStatus: "pass",
        downforceVal: "69%",
        shearStatus: "pass",
        shearVal: "7%",
      },
      {
        label: "Exposed 1",
        span: "1.29",
        windPressure: "-3260.36",
        uplift: "299.80",
        downforce: "299.80",
        shear: "1.97",
        upliftStatus: "fail",
        upliftVal: "12%",
        downforceStatus: "fail",
        downforceVal: "12%",
        shearStatus: "fail",
        shearVal: "12%",
      },
      {
        label: "Zone 2",
        span: "1.36",
        windPressure: "-2940.72",
        uplift: "284.23",
        downforce: "284.23",
        shear: "2.08",
        upliftStatus: "fail",
        upliftVal: "12%",
        downforceStatus: "fail",
        downforceVal: "12%",
        shearStatus: "fail",
        shearVal: "12%",
      },
      {
        label: "Exposed 2",
        span: "1.11",
        windPressure: "-4411.08",
        uplift: "350.17",
        downforce: "350.17",
        shear: "1.69",
        upliftStatus: "warn",
        upliftVal: "13%",
        downforceStatus: "warn",
        downforceVal: "13%",
        shearStatus: "warn",
        shearVal: "13%",
      },
      {
        label: "Zone 3",
        span: "1.15",
        windPressure: "-4091.44",
        uplift: "336.94",
        downforce: "336.94",
        shear: "1.75",
        upliftStatus: "warn",
        upliftVal: "13%",
        downforceStatus: "warn",
        downforceVal: "13%",
        shearStatus: "warn",
        shearVal: "13%",
      },
      {
        label: "Exposed 3",
        span: "0.94",
        windPressure: "-6137.16",
        uplift: "414.41",
        downforce: "414.41",
        shear: "1.42",
        upliftStatus: "warn",
        upliftVal: "13%",
        downforceStatus: "warn",
        downforceVal: "13%",
        shearStatus: "warn",
        shearVal: "13%",
      },
    ],
    []
  );

  const reset = () => {
    setCountry("");
    setLocation("");
    setMountingSystem("Hanger System");
    setRailType("Omnia");
    setModuleWidth("1.4");
    setModuleHeight("2.4");
    setRoofType("Gable");
    setWindCategory("T50");
    setExposureCategory("B");
    setSnowLoad("0");
    setBuildingHeight("10");
    setGroundElevation("");
    setWindSpeed("");
    setRoofSlope("0–7");
    setModuleWeight("35");
    setNumberOfRails("2");
  };

  const GRID = "border-[#3A3A3A]";
  const HEAD_BG = "bg-[#0A0A0A]/20";

  return (
    <div
      className="min-h-screen overflow-auto bg-cover text-white bg-center pb-20 pt-8 bg-no-repeat"
      style={{ backgroundImage: "url('/ralux-bg-img.png')" }}
    >
      <div className="px-4">
        <div className="w-full bg-[#0F0F0F]/35 backdrop-blur-lg md:mx-auto max-w-340 p-4 md:p-6 rounded-[56px] space-y-4 md:space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <Link
                href="/"
                aria-label="Go to home page"
                className="bg-[#141414] border-[#454545] w-36 h-14 rounded-2xl py-2 px-4 border-[0.3px] inline-flex items-center"
              >
                <Avatar className="h-10 w-28">
                  <AvatarImage
                    src="/ralux-logo.svg?height=40&width=112"
                    alt="ralux"
                  />
                </Avatar>
              </Link>

              <div className="pt-1">
                <h1 className="text-lg md:text-[22px] font-semibold leading-tight">
                  Dual Rail Systems
                </h1>
                <p className="text-[#FCFCFC]/80 text-xs md:text-sm">
                  ASCE 7-22 Validation
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              onClick={reset}
              className="rounded-full h-10 px-6"
            >
              Reset
            </Button>
          </div>

          {/* PROJECT INFORMATION */}
          <div>
            <h1 className="text-base text-center mb-2 font-semibold">
              PROJECT INFORMATION
            </h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] p-4 md:p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>
                    Country <span className="text-[#FF5600]">*</span>
                  </Label>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      {GEO_DESIGN_DATA.map((opt) => (
                        <SelectItem key={opt.countryCode} value={opt.countryCode}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>
                    Location <span className="text-[#FF5600]">*</span>
                  </Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {cityOptions.map((opt) => (
                        <SelectItem key={opt.cityCode} value={opt.cityCode}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>
                    Mounting System Type{" "}
                    <span className="text-[#FF5600]">*</span>
                  </Label>
                  <Select value={mountingSystem} onValueChange={setMountingSystem}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Hanger System", "Clip-KR18", "Domo System"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Label>Module Width</Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={moduleWidth}
                        onChange={(e) => setModuleWidth(e.target.value)}
                        placeholder=""
                        className="h-11 rounded-full pr-10"
                      />
                      <span className="absolute right-4 top-3 text-sm text-[#F0F0F0]">
                        m
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Label>Module Height</Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={moduleHeight}
                        onChange={(e) => setModuleHeight(e.target.value)}
                        placeholder=""
                        className="h-11 rounded-full pr-10"
                      />
                      <span className="absolute right-4 top-3 text-sm text-[#F0F0F0]">
                        m
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Roof Type</Label>
                  <div className="flex gap-4 mt-1">
                    {["Hip", "Gable", "Monoslope"].map((v) => (
                      <Pill
                        key={v}
                        active={roofType === v}
                        onClick={() => setRoofType(v)}
                      >
                        {v}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>
                    Rail Type <span className="text-[#FF5600]">*</span>
                  </Label>
                  <Select value={railType} onValueChange={setRailType}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select Rail Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Omnia", "Ace", "Omnia-2c", "Omnia-3c"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* ENVIRONMENTAL INPUTS */}
          <div>
            <h1 className="text-base font-semibold text-center mb-2">
              ENVIRONMENTAL INPUTS
            </h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] p-4 md:p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                  <Label>Wind speed category</Label>
                  <div className="flex gap-4 mt-1">
                    {(["T50", "T200", "MRI 700"] as const).map((v) => (
                      <Pill
                        key={v}
                        active={windCategory === v}
                        onClick={() => setWindCategory(v)}
                      >
                        {v}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Exposure Category</Label>
                  <div className="flex gap-4 mt-1">
                    {["B", "C", "D"].map((v) => (
                      <Pill
                        key={v}
                        active={exposureCategory === v}
                        onClick={() => setExposureCategory(v)}
                      >
                        {v}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Snow Load (Pa)</Label>
                  <div className="relative mt-1 flex-1">
                    <Input
                      type="number"
                      value={snowLoad}
                      onChange={(e) => setSnowLoad(e.target.value)}
                      className="h-11 rounded-full pr-10"
                    />
                    <span className="absolute right-3 top-3 text-sm">pa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SYSTEM CONFIGURATION */}
          <div>
            <h1 className="text-base font-semibold text-center mb-2">
              SYSTEM CONFIGURATION
            </h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] p-4 md:p-6 space-y-5">
              {/* Row 1 (✅ add Wind Speed here with Ground Elevation) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Building Height</Label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      value={buildingHeight}
                      onChange={(e) => setBuildingHeight(e.target.value)}
                      className="h-11 rounded-full pr-10"
                    />
                    <span className="absolute right-4 top-3 text-sm">m</span>
                  </div>
                </div>

                <div>
                  <Label>Ground Elevation</Label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      value={groundElevation}
                      onChange={(e) => setGroundElevation(e.target.value)}
                      className="h-11 rounded-full pr-10"
                    />
                    <span className="absolute right-4 top-3 text-sm">m</span>
                  </div>
                </div>

                <div>
                  <Label>Wind Speed</Label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      value={windSpeed}
                      onChange={(e) => setWindSpeed(e.target.value)}
                      className="h-11 rounded-full pr-10"
                    />
                    <span className="absolute right-4 top-3 text-sm">m/s</span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Roof Slope (°)</Label>
                  <Select value={roofSlope} onValueChange={setRoofSlope}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select Roof Slope" />
                    </SelectTrigger>
                    <SelectContent>
                      {roofSlopeOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Module Weight</Label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      value={moduleWeight}
                      onChange={(e) => setModuleWeight(e.target.value)}
                      className="h-11 rounded-full pr-10"
                    />
                    <span className="absolute right-4 top-3 text-sm">kg</span>
                  </div>
                </div>

                <div>
                  <Label>Number of Rails</Label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      value={numberOfRails}
                      onChange={(e) => setNumberOfRails(e.target.value)}
                      className="h-11 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div>
            <h1 className="text-base font-semibold text-center mb-2">RESULTS</h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-287 border-collapse">
                  <thead>
                    <tr className={HEAD_BG}>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      />
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Span (m)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Wind pressure (Pa)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Uplift Load Per attachment ( Kg)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Downforce Load per attachment ( Kg)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Shear load per attachment ( Kg)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Uplift Validation
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID
                        )}
                      >
                        Downforce Validation
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID
                        )}
                      >
                        Shear Validation
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {resultsRows.map((r, idx) => {
                      const isLast = idx === resultsRows.length - 1;

                      const cellBase = cn(
                        "px-6 py-4 text-white/90",
                        !isLast && "border-b",
                        !isLast && GRID
                      );

                      const cellR = cn(cellBase, "border-r", GRID);

                      return (
                        <tr key={`${r.label}-${idx}`}>
                          <td className={cn(cellR, "font-medium text-white/95")}>
                            {r.label}
                          </td>
                          <td className={cellR}>{r.span}</td>
                          <td className={cellR}>{r.windPressure}</td>
                          <td className={cellR}>{r.uplift}</td>
                          <td className={cellR}>{r.downforce}</td>
                          <td className={cellR}>{r.shear}</td>
                          <td className={cellR}>
                            <StatusBadge status={r.upliftStatus} value={r.upliftVal} />
                          </td>
                          <td className={cellR}>
                            <StatusBadge
                              status={r.downforceStatus}
                              value={r.downforceVal}
                            />
                          </td>
                          <td className={cellBase}>
                            <StatusBadge status={r.shearStatus} value={r.shearVal} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /RESULTS */}
        </div>
      </div>
    </div>
  );
}
