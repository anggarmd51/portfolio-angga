"use client";

import React from "react";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Code2,
  ExternalLink,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { projects, projectsIntro, type ProjectEntry } from "@/lib/content";

function LiveProductMockup({ project }: { project: ProjectEntry }) {
  switch (project.mockupType) {
    case "crm":
      return (
        <div
          aria-hidden="true"
          className="rounded-lg border border-kertas-dingin/20 bg-[#07221D] p-4 text-kertas-dingin overflow-hidden"
        >
          {/* App Top Bar */}
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-kertas-dingin/15">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-kuning-stabilo" />
              <span className="font-display text-xs font-bold tracking-tight text-kertas-dingin">
                AR CRM · B2B Pipeline Mobile PWA
              </span>
            </div>
            <span className="font-display text-[11px] font-bold px-2 py-0.5 rounded bg-kuning-stabilo text-hijau-ledger tabular-nums">
              Sync Aktif
            </span>
          </div>

          {/* Mini Kanban Columns */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            <div className="rounded bg-white/[0.05] p-2.5 border border-kertas-dingin/10">
              <div className="flex items-center justify-between">
                <span className="font-display text-[10px] font-bold uppercase text-kertas-dingin/70">
                  Prospect
                </span>
                <span className="font-display text-[10px] font-extrabold text-kuning-stabilo tabular-nums">
                  14
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="rounded bg-white/[0.07] p-1.5">
                  <p className="font-display text-[11px] font-bold text-kertas-dingin truncate">
                    PT Sumatra Logistik
                  </p>
                  <p className="font-display text-[10px] text-kertas-dingin/65">
                    HRIS · Cold Outreach
                  </p>
                </div>
                <div className="rounded bg-white/[0.07] p-1.5">
                  <p className="font-display text-[11px] font-bold text-kertas-dingin truncate">
                    Kopi Medan Group
                  </p>
                  <p className="font-display text-[10px] text-kertas-dingin/65">
                    POS · 4 Cabang
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded bg-white/[0.05] p-2.5 border border-kertas-dingin/10">
              <div className="flex items-center justify-between">
                <span className="font-display text-[10px] font-bold uppercase text-kertas-dingin/70">
                  Demo C-Level
                </span>
                <span className="font-display text-[10px] font-extrabold text-kuning-stabilo tabular-nums">
                  6
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="rounded bg-white/[0.07] p-1.5">
                  <p className="font-display text-[11px] font-bold text-kertas-dingin truncate">
                    RS Permata Bunda
                  </p>
                  <p className="font-display text-[10px] text-kuning-stabilo">
                    Demo HRIS Besok 10:00
                  </p>
                </div>
                <div className="rounded bg-white/[0.07] p-1.5">
                  <p className="font-display text-[11px] font-bold text-kertas-dingin truncate">
                    Distribusi Prima
                  </p>
                  <p className="font-display text-[10px] text-kertas-dingin/65">
                    Proposal Dikirim
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded bg-kuning-stabilo/15 p-2.5 border border-kuning-stabilo/40">
              <div className="flex items-center justify-between">
                <span className="font-display text-[10px] font-bold uppercase text-kuning-stabilo">
                  Closed Won
                </span>
                <span className="font-display text-[10px] font-extrabold text-kuning-stabilo tabular-nums">
                  100%
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="rounded bg-kuning-stabilo text-hijau-ledger p-1.5">
                  <p className="font-display text-[11px] font-extrabold truncate">
                    Rp 50.000.000
                  </p>
                  <p className="font-display text-[10px] font-semibold">
                    Target Tercapai
                  </p>
                </div>
                <div className="rounded bg-white/10 p-1.5">
                  <p className="font-display text-[10px] font-bold text-kertas-dingin truncate">
                    Onboarding Aktif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "jobportal":
      return (
        <div
          aria-hidden="true"
          className="rounded-lg border border-garis-embun bg-kertas-dingin p-4 overflow-hidden"
        >
          {/* Browser Header */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-garis-embun">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-hijau-ledger/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-hijau-ledger/25" />
              <span className="font-display text-[11px] font-bold text-hijau-ledger ml-1">
                lokerresmi.vercel.app
              </span>
            </div>
            <span className="font-display text-[10px] font-bold px-2 py-0.5 rounded bg-hijau-ledger text-kuning-stabilo">
              Verified Jobs
            </span>
          </div>

          {/* Search Bar Simulation */}
          <div className="mt-3 flex items-center justify-between rounded-md bg-white border border-garis-embun px-3 py-1.5">
            <div className="flex items-center gap-2 min-w-0">
              <Search className="w-3.5 h-3.5 text-teal-tautan shrink-0" />
              <span className="font-display text-xs font-semibold text-hijau-ledger truncate">
                B2B Sales, Account Manager, Keuangan · Medan
              </span>
            </div>
            <span className="font-display text-[10px] font-bold px-2 py-0.5 rounded bg-kuning-stabilo text-hijau-ledger shrink-0">
              Cari
            </span>
          </div>

          {/* Job Listing Rows */}
          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="rounded bg-white p-2.5 border border-garis-embun">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-extrabold text-hijau-ledger">
                  Account Executive B2B
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-tautan shrink-0" />
              </div>
              <p className="font-display text-[11px] text-abu-hijau mt-0.5">
                Medan · Full-Time · Terverifikasi
              </p>
            </div>
            <div className="rounded bg-white p-2.5 border border-garis-embun">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-extrabold text-hijau-ledger">
                  Credit Analyst Officer
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-tautan shrink-0" />
              </div>
              <p className="font-display text-[11px] text-abu-hijau mt-0.5">
                Sumatera Utara · Perbankan
              </p>
            </div>
          </div>
        </div>
      );

    case "automotive":
      return (
        <div
          aria-hidden="true"
          className="rounded-lg border border-garis-embun bg-[#101820] text-kertas-dingin p-4 overflow-hidden"
        >
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-kuning-stabilo" />
              <span className="font-display text-xs font-extrabold tracking-wider uppercase text-white">
                Thirteen Project · Custom Automotive Catalog
              </span>
            </div>
            <span className="font-display text-[10px] font-bold px-2 py-0.5 rounded bg-kuning-stabilo text-hijau-ledger">
              Showcase
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            <div className="rounded bg-white/[0.06] border border-white/10 p-2.5">
              <span className="font-display text-[10px] font-bold text-kuning-stabilo uppercase">
                01 · Lighting
              </span>
              <p className="font-display text-xs font-bold text-white mt-1">
                Bi-LED Matrix Setup
              </p>
              <p className="font-display text-[10px] text-white/65 mt-0.5">
                Katalog &amp; Spesifikasi
              </p>
            </div>
            <div className="rounded bg-white/[0.06] border border-white/10 p-2.5">
              <span className="font-display text-[10px] font-bold text-kuning-stabilo uppercase">
                02 · Portfolio
              </span>
              <p className="font-display text-xs font-bold text-white mt-1">
                Galeri Pengerjaan
              </p>
              <p className="font-display text-[10px] text-white/65 mt-0.5">
                Before / After Build
              </p>
            </div>
            <div className="rounded bg-white/[0.06] border border-white/10 p-2.5">
              <span className="font-display text-[10px] font-bold text-kuning-stabilo uppercase">
                03 · Funnel
              </span>
              <p className="font-display text-xs font-bold text-white mt-1">
                Direct Booking WA
              </p>
              <p className="font-display text-[10px] text-white/65 mt-0.5">
                Konversi Pelanggan
              </p>
            </div>
          </div>
        </div>
      );

    case "banking":
      return (
        <div
          aria-hidden="true"
          className="rounded-lg border border-garis-embun bg-kertas-dingin p-4 overflow-hidden"
        >
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-garis-embun">
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-hijau-ledger" />
              <span className="font-display text-xs font-extrabold text-hijau-ledger">
                Arsitektur Operasional Akuisisi · Lending balé by BTN
              </span>
            </div>
            <span className="font-display text-[10px] font-bold px-2 py-0.5 rounded bg-hijau-ledger text-kuning-stabilo">
              PIC Vendor
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 items-stretch">
            <div className="rounded bg-hijau-ledger text-kertas-dingin p-2.5 flex flex-col justify-between">
              <span className="font-display text-[10px] font-bold text-kuning-stabilo uppercase">
                Level 1 · Lead
              </span>
              <p className="font-display text-xs font-extrabold mt-1">
                PIC Project Vendor
              </p>
              <p className="font-display text-[10px] text-kertas-dingin/75 mt-0.5">
                PT Beran Solusindo P.
              </p>
            </div>
            <div className="rounded bg-white border border-garis-embun p-2.5 flex flex-col justify-between">
              <span className="font-display text-[10px] font-bold text-teal-tautan uppercase">
                Level 2 · Koordinasi
              </span>
              <p className="font-display text-xs font-extrabold text-hijau-ledger mt-1">
                1 Team Leader
              </p>
              <p className="font-display text-[10px] text-abu-hijau mt-0.5">
                Supervisi Harian
              </p>
            </div>
            <div className="rounded bg-white border border-garis-embun p-2.5 flex flex-col justify-between">
              <span className="font-display text-[10px] font-bold text-teal-tautan uppercase">
                Level 3 · Eksekusi
              </span>
              <p className="font-display text-xs font-extrabold text-hijau-ledger mt-1">
                10 Sales Lapangan
              </p>
              <p className="font-display text-[10px] text-abu-hijau mt-0.5">
                Akuisisi &amp; KYC Nasabah
              </p>
            </div>
          </div>
        </div>
      );
  }
}

export default function FeaturedProjects() {
  return (
    <section
      id="proyek"
      aria-labelledby="featured-projects-heading"
      className="scroll-mt-20 w-full border-t border-garis-embun py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-tautan mb-2">
              <Code2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="font-display text-xs font-extrabold uppercase tracking-wider">
                Proof of Execution · Produk Digital &amp; Proyek Komersial
              </span>
            </div>
            <h2
              id="featured-projects-heading"
              className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-hijau-ledger"
            >
              Inisiatif Produk Mandiri &amp; Kepemimpinan Proyek
            </h2>
          </div>
          <p className="font-body text-base sm:text-lg leading-[1.7] text-abu-hijau max-w-[58ch]">
            {projectsIntro}
          </p>
        </div>

        {/* 2x2 Asymmetric Bento Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {projects.map((p) => {
            const isDark = Boolean(p.featuredDark);
            return (
              <article
                key={p.id}
                className={`lg:col-span-6 ${
                  isDark ? "bento-card-dark" : "bento-card"
                } p-6 sm:p-7 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 font-display text-xs font-bold px-2.5 py-1 rounded ${
                        isDark
                          ? "bg-kuning-stabilo text-hijau-ledger"
                          : "bg-kertas-dingin text-hijau-ledger border border-garis-embun"
                      }`}
                    >
                      {p.mockupType === "crm" ? (
                        <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                      <span>{p.category}</span>
                    </span>

                    <span
                      className={`font-display text-xs font-semibold ${
                        isDark ? "text-kertas-dingin/80" : "text-abu-hijau"
                      }`}
                    >
                      {p.role}
                    </span>
                  </div>

                  {/* Live Product UI Mockup Window */}
                  <LiveProductMockup project={p} />

                  {/* Title & Core Description */}
                  <div className="mt-5">
                    <h3
                      className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight ${
                        isDark ? "text-kertas-dingin" : "text-hijau-ledger"
                      }`}
                    >
                      {p.name}
                    </h3>
                    <p
                      className={`mt-2 font-body text-base sm:text-lg leading-[1.7] ${
                        isDark ? "text-kertas-dingin/85" : "text-hijau-ledger/90"
                      }`}
                    >
                      {p.description}
                    </p>
                  </div>

                  {/* Challenge vs Outcome Mini Grid */}
                  <div
                    className={`mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg p-3.5 border ${
                      isDark
                        ? "bg-white/[0.04] border-kertas-dingin/15"
                        : "bg-kertas-dingin/65 border-garis-embun"
                    }`}
                  >
                    <div>
                      <p
                        className={`font-display text-[11px] font-extrabold uppercase tracking-wider ${
                          isDark ? "text-kuning-stabilo" : "text-abu-hijau"
                        }`}
                      >
                        Tantangan Lapangan
                      </p>
                      <p
                        className={`mt-1 font-body text-xs sm:text-sm leading-relaxed ${
                          isDark ? "text-kertas-dingin/85" : "text-hijau-ledger"
                        }`}
                      >
                        {p.challenge}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`font-display text-[11px] font-extrabold uppercase tracking-wider ${
                          isDark ? "text-kuning-stabilo" : "text-teal-tautan"
                        }`}
                      >
                        Solusi &amp; Dampak
                      </p>
                      <p
                        className={`mt-1 font-body text-xs sm:text-sm leading-relaxed ${
                          isDark ? "text-kertas-dingin/85" : "text-hijau-ledger"
                        }`}
                      >
                        {p.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer: Stack Tags & External Link CTA */}
                <div
                  className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                    isDark ? "border-kertas-dingin/15" : "border-garis-embun"
                  }`}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-display text-[11px] font-semibold px-2.5 py-0.5 rounded ${
                          isDark
                            ? "bg-white/10 text-kertas-dingin"
                            : "bg-kertas-dingin text-abu-hijau border border-garis-embun"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 font-display text-xs sm:text-sm font-extrabold px-4 py-2 rounded-lg transition-all ${
                        isDark
                          ? "bg-kuning-stabilo text-hijau-ledger hover:brightness-105"
                          : "bg-hijau-ledger text-kertas-dingin hover:bg-hijau-ledger/90"
                      } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hijau-ledger`}
                    >
                      <span>Buka Aplikasi Live</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold px-3 py-1.5 rounded-lg bg-kertas-dingin text-hijau-ledger border border-garis-embun">
                      <ShieldCheck
                        className="w-4 h-4 text-teal-tautan shrink-0"
                        aria-hidden="true"
                      />
                      <span>Operasional Kemitraan Korporat</span>
                      <ExternalLink className="w-3.5 h-3.5 text-abu-hijau hidden" aria-hidden="true" />
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
