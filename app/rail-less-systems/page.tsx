"use client";

import React, { useEffect, useMemo, useState } from "react";
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
import { calcRailLess } from "@/lib/calculators/rail-less";

type PillProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Pill = ({ active, onClick, children }: PillProps) => (
  <Button
    variant="outline"
    type="button"
    onClick={onClick}
    className={cn(
      "flex-1 text-[13px] md:text-base text-[#BFBFBF] rounded-full h-11",
      active && "border border-[#FA4616] text-white",
    )}
  >
    {children}
  </Button>
);

type ValidationStatus = "pass" | "fail" | "warn";

const StatusBadge = ({
  status,
  value,
}: {
  status: ValidationStatus;
  value: string;
}) => {
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
          styles,
        )}
      >
        {glyph}
      </div>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
};

type ResultsRow = {
  label: string;
  uplift: string;
  downforce: string;
  shear: string;
  status: ValidationStatus;
  validation: string;
};

const formatNumber = (value?: number) =>
  typeof value === "number" && Number.isFinite(value)
    ? value.toFixed(2)
    : "--";

const formatPercent = (value?: number) =>
  typeof value === "number" && Number.isFinite(value)
    ? `${Math.round(value)}%`
    : "--";

const statusFromPercent = (value?: number): ValidationStatus => {
  if (typeof value !== "number" || !Number.isFinite(value)) return "warn";
  return value <= 100 ? "pass" : "fail";
};

export default function RailLessSystemsPage() {
  // top selects
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [mountingType, setMountingType] = useState("Micro Rail System");

  // module size
  const [moduleWidth, setModuleWidth] = useState("1.4");
  const [moduleLength, setModuleLength] = useState("2.4");

  // roof type + coverage
  const [roofType, setRoofType] = useState<"Gable" | "Monoslope" | "Hip">(
    "Gable",
  );
  const [roofCoverage, setRoofCoverage] = useState("Standing Seam Metal");

  type WindCategoryLabel = Exclude<WindSpeedCategory, "T10">;

  // environmental
  const [windCategory, setWindCategory] =
    useState<WindCategoryLabel>("T50");
  const [exposureCategory, setExposureCategory] = useState<"B" | "C" | "D">(
    "B"
  );
  const [snowLoad, setSnowLoad] = useState("0");

  // system configuration
  const [buildingHeight, setBuildingHeight] = useState("10");
  const [groundElevation, setGroundElevation] = useState("2250");

  // ✅ NEW: wind speed (added beside ground elevation)
  const [windSpeed, setWindSpeed] = useState("0");

  const [roofSlope, setRoofSlope] = useState(""); // will be set based on roofType
  const [moduleWeight, setModuleWeight] = useState("35");
  const [roofThickness, setRoofThickness] = useState("0.4");
  const [attachmentThickness, setAttachmentThickness] = useState("0.7");

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

  const cols = useMemo(
    () => ["Zone 1", "Exposed 1", "Zone 2", "Exposed 2", "Zone 3", "Exposed 3"],
    [],
  );

  const [attachmentsPerModule, setAttachmentsPerModule] = useState({
    z1: "4",
    e1: "4",
    z2: "4",
    e2: "4",
    z3: "4",
    e3: "4",
  });

  // FIXED SCREWS PER ATTACHMENT (depends on mounting system type)
  const fixedScrewsPerAttachment = useMemo(() => {
    const t = (mountingType || "").toLowerCase();
    if (t.includes("micro")) return "4";
    if (t.includes("mini")) return "2";
    if (t.includes("kr18") || t.includes("kr 18")) return "1";
    return "2";
  }, [mountingType]);

  // Roof slope options depend on roof type
  const roofSlopeOptions = useMemo(() => {
    if (roofType === "Gable") return ["0–7", "7–20", "20–27", "27–45"];
    if (roofType === "Monoslope") return ["3–10", "10–30"];
    return ["7–20", "20–27", "27–45"]; // Hip
  }, [roofType]);

  // keep roofSlope valid when roofType changes
  useEffect(() => {
    if (!roofSlopeOptions.includes(roofSlope)) {
      setRoofSlope(roofSlopeOptions[0] ?? "");
    }
  }, [roofType, roofSlopeOptions, roofSlope]);

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

  // RESULTS (UI data)
  // NOTE: downforce & shear are grouped into 3 rows (Z1/E1, Z2/E2, Z3/E3)
  const calcResult = useMemo(
    () =>
      calcRailLess({
        mountingType,
        moduleWidth,
        moduleLength,
        moduleWeight,
        roofType,
        roofSlope,
        roofCoverage,
        roofThickness,
        buildingHeight,
        groundElevation,
        windSpeed,
        exposureCategory,
        snowLoad,
        attachmentsPerModule,
      }),
    [
      mountingType,
      moduleWidth,
      moduleLength,
      moduleWeight,
      roofType,
      roofSlope,
      roofCoverage,
      roofThickness,
      buildingHeight,
      groundElevation,
      windSpeed,
      exposureCategory,
      snowLoad,
      attachmentsPerModule,
    ],
  );

  const resultsRows = useMemo<ResultsRow[]>(() => {
    const empty: ResultsRow[] = [
      {
        label: "Zone 1",
        uplift: "--",
        downforce: "--",
        shear: "--",
        status: "warn",
        validation: "--",
      },
      {
        label: "Exposed 1",
        uplift: "--",
        downforce: "--",
        shear: "--",
        status: "warn",
        validation: "--",
      },
      {
        label: "Zone 2",
        uplift: "--",
        downforce: "--",
        shear: "--",
        status: "warn",
        validation: "--",
      },
      {
        label: "Exposed 2",
        uplift: "--",
        downforce: "--",
        shear: "--",
        status: "warn",
        validation: "--",
      },
      {
        label: "Zone 3",
        uplift: "--",
        downforce: "--",
        shear: "--",
        status: "warn",
        validation: "--",
      },
      {
        label: "Exposed 3",
        uplift: "--",
        downforce: "--",
        shear: "--",
        status: "warn",
        validation: "--",
      },
    ];

    if ("error" in calcResult) return empty;

    const per = calcResult.mounting.perAttachmentKg;
    const perEx = calcResult.mounting.perAttachmentExposedKg;
    const val = calcResult.mounting.validation?.finalUtilizationPercent;
    const valEx =
      calcResult.mounting.validation?.finalUtilizationPercentExposed;

    const down = calcResult.mounting.downforcePerAttachmentKg;
    const shear = calcResult.mounting.shearPerAttachmentKg;

    return [
      {
        label: "Zone 1",
        uplift: formatNumber(per?.center),
        downforce: formatNumber(down),
        shear: formatNumber(shear),
        status: statusFromPercent(val?.center),
        validation: formatPercent(val?.center),
      },
      {
        label: "Exposed 1",
        uplift: formatNumber(perEx?.center),
        downforce: formatNumber(down),
        shear: formatNumber(shear),
        status: statusFromPercent(valEx?.center),
        validation: formatPercent(valEx?.center),
      },
      {
        label: "Zone 2",
        uplift: formatNumber(per?.edge),
        downforce: formatNumber(down),
        shear: formatNumber(shear),
        status: statusFromPercent(val?.edge),
        validation: formatPercent(val?.edge),
      },
      {
        label: "Exposed 2",
        uplift: formatNumber(perEx?.edge),
        downforce: formatNumber(down),
        shear: formatNumber(shear),
        status: statusFromPercent(valEx?.edge),
        validation: formatPercent(valEx?.edge),
      },
      {
        label: "Zone 3",
        uplift: formatNumber(per?.corner),
        downforce: formatNumber(down),
        shear: formatNumber(shear),
        status: statusFromPercent(val?.corner),
        validation: formatPercent(val?.corner),
      },
      {
        label: "Exposed 3",
        uplift: formatNumber(perEx?.corner),
        downforce: formatNumber(down),
        shear: formatNumber(shear),
        status: statusFromPercent(valEx?.corner),
        validation: formatPercent(valEx?.corner),
      },
    ];
  }, [calcResult]);

  const reset = () => {
    setCountry("");
    setLocation("");
    setMountingType("Micro Rail System");
    setModuleWidth("1.4");
    setModuleLength("2.4");
    setRoofType("Gable");
    setRoofCoverage("Standing Seam Metal");
    setWindCategory("T50");
    setExposureCategory("B");
    setSnowLoad("0");
    setBuildingHeight("10");
    setGroundElevation("");
    setWindSpeed("");
    // roofSlope will auto-adjust via effect based on roofType
    setModuleWeight("35");
    setRoofThickness("0.4");
    setAttachmentThickness("0.7");
    setAttachmentsPerModule({
      z1: "4",
      e1: "4",
      z2: "4",
      e2: "4",
      z3: "4",
      e3: "4",
    });
  };

  // slightly lighter grid lines so they are visible
  const GRID = "border-[#3A3A3A]";
  const HEAD_BG = "bg-[#0A0A0A]/20";

  return (
    <div
      className="min-h-screen overflow-auto bg-cover text-white bg-center pb-16 pt-10 bg-no-repeat"
      style={{ backgroundImage: "url('/ralux-bg-img.png')" }}
    >
      <div className="px-4">
        <div className="w-full bg-[#0F0F0F]/35 backdrop-blur-lg md:mx-auto max-w-340 p-4 md:p-6 rounded-[48px] space-y-4 md:space-y-6">
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
                  Rail Less Systems
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
                  <Select value={mountingType} onValueChange={setMountingType}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Kr18 System", "Mini Rail System", "Micro Rail System"].map(
                        (opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Module Size */}
                <div className="flex gap-3">
                  <div>
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
                  <div>
                    <Label>Module Height</Label>
                    <div className="relative mt-1">
                      <Input
                        type="number"
                        value={moduleLength}
                        onChange={(e) => setModuleLength(e.target.value)}
                        placeholder=""
                        className="h-11 rounded-full pr-10"
                      />
                      <span className="absolute right-4 top-3 text-sm text-[#F0F0F0]">
                        m
                      </span>
                    </div>
                  </div>
                </div>

                {/* Roof Type */}
                <div>
                  <Label>Roof Type</Label>
                  <div className="flex gap-4 mt-1">
                    {(["Hip", "Gable", "Monoslope"] as const).map((v) => (
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

                {/* Roof Coverage */}
                <div>
                  <Label>Roof Coverage</Label>
                  <div className="flex gap-4 mt-1">
                    {["Trapezoidal Sheet Metal", "Standing Seam Metal"].map(
                      (v) => (
                        <Pill
                          key={v}
                          active={roofCoverage === v}
                          onClick={() => setRoofCoverage(v)}
                        >
                          {v}
                        </Pill>
                      ),
                    )}
                  </div>
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
                    {(["B", "C", "D"] as const).map((v) => (
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
              {/* Row 1 */}
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

                {/* ✅ NEW: Wind Speed input (beside Ground Elevation) */}
                <div>
                  <Label>Wind Speed</Label>
                  <div className="relative mt-1">
                    <Input
                      type="number"
                      value={windSpeed}
                      onChange={(e) => setWindSpeed(e.target.value)}
                      className="h-11 rounded-full pr-10"
                      placeholder="0"
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
                  <Label>Roof Thickness(mm)</Label>
                  <Select value={roofThickness} onValueChange={setRoofThickness}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "0.4",
                        "0.5",
                        "0.55",
                        "0.63",
                        "0.75",
                        "0.88",
                        "1",
                        "1.13",
                        "1.25",
                      ].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}mm
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Attachment Thickness (mm)</Label>
                  <Select
                    value={attachmentThickness}
                    onValueChange={setAttachmentThickness}
                  >
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {["0.7", "0.8", "0.9"].map((opt) => (
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

          {/* FASTENING CONFIGURATION */}
          <div>
            <h1 className="text-base font-semibold text-center mb-2">
              FASTENING CONFIGURATION
            </h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] p-4 md:p-6 space-y-4">
              <div className="grid grid-cols-[160px_repeat(6,minmax(0,1fr))] gap-3 items-end">
                <div />
                {cols.map((c) => (
                  <div
                    key={c}
                    className="text-center text-xs text-[#FCFCFC]/70"
                  >
                    {c}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[160px_repeat(6,minmax(0,1fr))] gap-3 items-center">
                <div className="text-xs text-[#FCFCFC]/85">
                  Attachments per Module
                </div>
                {[
                  ["z1", attachmentsPerModule.z1],
                  ["e1", attachmentsPerModule.e1],
                  ["z2", attachmentsPerModule.z2],
                  ["e2", attachmentsPerModule.e2],
                  ["z3", attachmentsPerModule.z3],
                  ["e3", attachmentsPerModule.e3],
                ].map(([key, val]) => (
                  <Select
                    key={String(key)}
                    value={String(val)}
                    onValueChange={(v) =>
                      setAttachmentsPerModule((p) => ({ ...p, [key]: v }))
                    }
                  >
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["4", "6", "8"].map((n) => (
                        <SelectItem key={n} value={n}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              </div>

              {/* Screws per Attachment (FIXED, no dropdown) */}
              <div className="grid grid-cols-[160px_repeat(6,minmax(0,1fr))] gap-3 items-center">
                <div className="text-xs text-[#FCFCFC]/85">
                  Screws per Attachment
                </div>

                {cols.map((col) => (
                  <div key={col} className="w-full">
                    <Input
                      value={fixedScrewsPerAttachment}
                      disabled
                      className={cn(
                        "h-11 rounded-full text-center",
                        "disabled:opacity-100 disabled:cursor-not-allowed",
                        "bg-[#0B0B0B]/40 border border-[#2A2A2A] text-white/90",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div>
            <h1 className="text-base font-semibold text-center mb-2">RESULTS</h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-245 border-collapse">
                  <thead>
                    <tr className={HEAD_BG}>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID,
                        )}
                      />
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID,
                        )}
                      >
                        Uplift Load per Attachment (kg)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID,
                        )}
                      >
                        Downforce Load per Attachment (kg)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                          "border-r",
                          GRID,
                        )}
                      >
                        Shear Load per Attachment (kg)
                      </th>
                      <th
                        className={cn(
                          "text-left font-medium text-[14px] text-white/90",
                          "px-6 py-4",
                          "border-b",
                          GRID,
                        )}
                      >
                        Validation
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {resultsRows.map((r, idx) => {
                      const isPairTop = idx % 2 === 0;
                      const isLast = idx === resultsRows.length - 1;
                      const showGrouped = isPairTop;

                      return (
                        <tr key={r.label}>
                          <td
                            className={cn(
                              "px-6 py-4 font-medium text-white/95",
                              "border-r",
                              GRID,
                              !isLast && "border-b",
                              !isLast && GRID,
                            )}
                          >
                            {r.label}
                          </td>

                          <td
                            className={cn(
                              "px-6 py-4 text-white/90",
                              "border-r",
                              GRID,
                              !isLast && "border-b",
                              !isLast && GRID,
                            )}
                          >
                            {r.uplift}
                          </td>

                          {showGrouped && (
                            <td
                              rowSpan={2}
                              className={cn(
                                "px-6 py-4 text-white/90 align-middle",
                                "border-r",
                                GRID,
                                idx < resultsRows.length - 2 && "border-b",
                                idx < resultsRows.length - 2 && GRID,
                              )}
                            >
                              {r.downforce}
                            </td>
                          )}

                          {showGrouped && (
                            <td
                              rowSpan={2}
                              className={cn(
                                "px-6 py-4 text-white/90 align-middle",
                                "border-r",
                                GRID,
                                idx < resultsRows.length - 2 && "border-b",
                                idx < resultsRows.length - 2 && GRID,
                              )}
                            >
                              {r.shear}
                            </td>
                          )}

                          <td
                            className={cn(
                              "px-6 py-4",
                              !isLast && "border-b",
                              !isLast && GRID,
                            )}
                          >
                            <StatusBadge status={r.status} value={r.validation} />
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
