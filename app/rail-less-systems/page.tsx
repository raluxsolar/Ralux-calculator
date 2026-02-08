"use client";

import React, { useMemo, useState } from "react";
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

const Pill = ({ active, onClick, children }) => (
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

export default function RailLessSystemsPage() {
  // top selects
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [mountingType, setMountingType] = useState("Micro Rail System");

  // module size
  const [moduleWidth, setModuleWidth] = useState("1.4");
  const [moduleLength, setModuleLength] = useState("2.4");

  // roof type + coverage
  const [roofType, setRoofType] = useState("Gable");
  const [roofCoverage, setRoofCoverage] = useState("Standing Seam Metal");

  // environmental
  const [windCategory, setWindCategory] = useState("T50 (CFE)");
  const [exposureCategory, setExposureCategory] = useState("B");
  const [snowLoad, setSnowLoad] = useState("0");

  // system configuration
  const [buildingHeight, setBuildingHeight] = useState("10");
  const [groundElevation, setGroundElevation] = useState("2250");
  const [roofSlope, setRoofSlope] = useState("20–27");
  const [moduleWeight, setModuleWeight] = useState("35");
  const [roofThickness, setRoofThickness] = useState("0.4");
  const [attachmentThickness, setAttachmentThickness] = useState("0.7");

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

  const [screwsPerAttachment, setScrewsPerAttachment] = useState({
    z1: "2",
    e1: "2",
    z2: "2",
    e2: "2",
    z3: "2",
    e3: "2",
  });

  const reset = () => {
    setCountry("");
    setLocation("");
    setMountingType("Micro Rail System");
    setModuleWidth("1.4");
    setModuleLength("2.4");
    setRoofType("Gable");
    setRoofCoverage("Standing Seam Metal");
    setWindCategory("T50 (CFE)");
    setExposureCategory("B");
    setSnowLoad("0");
    setBuildingHeight("10");
    setGroundElevation("2250");
    setRoofSlope("20–27");
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
    setScrewsPerAttachment({
      z1: "2",
      e1: "2",
      z2: "2",
      e2: "2",
      z3: "2",
      e3: "2",
    });
  };

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
              <div className="bg-[#141414] border-[#454545] w-36 h-14 rounded-2xl py-2 px-4 border-[0.3px]">
                <Avatar className="h-10 w-28">
                  <AvatarImage
                    src="/ralux-logo.svg?height=40&width=112"
                    alt="ralux"
                  />
                </Avatar>
              </div>

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
                      {["Mexico", "Other"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
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
                      {["Location 1", "Location 2", "Location 3"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
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
                      {["Kr18 System", "Mini Rail System", "Micro Rail System"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
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
                    {["T50 (CFE)", "T200", "MRI 700"].map((v) => (
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
          <div>
            {/* SYSTEM CONFIGURATION */}
            <h1 className="text-base font-semibold text-center mb-2">
              SYSTEM CONFIGURATION
            </h1>

            <div className="w-full bg-[#0F0F0F59] border border-[#1F1F1F] rounded-[32px] p-4 md:p-6 space-y-5">
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
                  <Label>Roof Slope (°)</Label>
                  <Select value={roofSlope} onValueChange={setRoofSlope}>
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select Roof Slope" />
                    </SelectTrigger>
                    <SelectContent>
                      {["0–10", "10–20", "20–27", "27–35"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <Select
                    value={roofThickness}
                    onValueChange={setRoofThickness}
                  >
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {["0.4", "0.5", "0.6"].map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

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
                    key={key}
                    value={val}
                    onValueChange={(v) =>
                      setAttachmentsPerModule((p) => ({ ...p, [key]: v }))
                    }
                  >
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["2", "3", "4", "5", "6"].map((n) => (
                        <SelectItem key={n} value={n}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              </div>

              <div className="grid grid-cols-[160px_repeat(6,minmax(0,1fr))] gap-3 items-center">
                <div className="text-xs text-[#FCFCFC]/85">
                  Screws per Attachment
                </div>
                {[
                  ["z1", screwsPerAttachment.z1],
                  ["e1", screwsPerAttachment.e1],
                  ["z2", screwsPerAttachment.z2],
                  ["e2", screwsPerAttachment.e2],
                  ["z3", screwsPerAttachment.z3],
                  ["e3", screwsPerAttachment.e3],
                ].map(([key, val]) => (
                  <Select
                    key={key}
                    value={val}
                    onValueChange={(v) =>
                      setScrewsPerAttachment((p) => ({ ...p, [key]: v }))
                    }
                  >
                    <SelectTrigger className="h-11 rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {["1", "2", "3", "4"].map((n) => (
                        <SelectItem key={n} value={n}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
