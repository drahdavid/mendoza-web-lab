import {
  Crown,
  Gauge,
  Search,
  Smartphone,
  MessageCircle,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
} from "lucide-react";
import type { Dictionary } from "@/dictionaries/types";
import { Package, CompareRow } from "./types";

export const WA_BASE = "https://wa.me/5492612005950";

export const waLink = (text: string) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const WA_GENERAL = waLink(
  "Hola Web Lab, me gustaría hablar sobre un proyecto web.",
);

export const getSolutionCards = (dict: Dictionary) =>
  [
    {
      title: dict.services.cards.professional.title,
      desc: dict.services.cards.professional.desc,
      Icon: Crown,
    },
    {
      title: dict.services.cards.seo.title,
      desc: dict.services.cards.seo.desc,
      Icon: Search,
    },
    {
      title: dict.services.cards.identity.title,
      desc: dict.services.cards.identity.desc,
      Icon: Palette,
    },
    {
      title: dict.services.cards.fast.title,
      desc: dict.services.cards.fast.desc,
      Icon: Gauge,
    },
    {
      title: dict.services.cards.mobile.title,
      desc: dict.services.cards.mobile.desc,
      Icon: Smartphone,
    },
    {
      title: dict.services.cards.conversion.title,
      desc: dict.services.cards.conversion.desc,
      Icon: MessageCircle,
    },
  ] as const;

export const getPackages = (dict: Dictionary): Package[] => [
  {
    id: "start",
    featured: false,
    badge: dict.packages.cards.start.badge,
    badgeColor: "bg-emerald-500/15 text-emerald-300",
    borderHover: "hover:border-emerald-300/50",
    title: dict.packages.cards.start.title,
    targetAudience: dict.packages.cards.start.audience,
    mainDiff: dict.packages.cards.start.diff,
    desc: dict.packages.cards.start.desc,
    price: dict.packages.cards.start.price,
    delivery: dict.packages.cards.start.delivery,
    includes: dict.packages.cards.start.includes,
    excludes: dict.packages.cards.start.excludes,
    demoHref: "/demo/start",
    waText: dict.packages.cards.start.waText,
  },
  {
    id: "pro",
    badge: dict.packages.cards.pro.badge,
    badgeColor: "bg-brand-accent text-white",
    borderHover: "",
    featured: true,
    title: dict.packages.cards.pro.title,
    targetAudience: dict.packages.cards.pro.audience,
    mainDiff: dict.packages.cards.pro.diff,
    desc: dict.packages.cards.pro.desc,
    price: dict.packages.cards.pro.price,
    delivery: dict.packages.cards.pro.delivery,
    includes: dict.packages.cards.pro.includes,
    excludes: dict.packages.cards.pro.excludes,
    demoHref: "/demo/pro",
    waText: dict.packages.cards.pro.waText,
  },
  {
    id: "marca-web",
    featured: false,
    badge: dict.packages.cards.marcaWeb.badge,
    badgeColor: "bg-violet-500/15 text-violet-300",
    borderHover: "hover:border-violet-400/50",
    title: dict.packages.cards.marcaWeb.title,
    targetAudience: dict.packages.cards.marcaWeb.audience,
    mainDiff: dict.packages.cards.marcaWeb.diff,
    desc: dict.packages.cards.marcaWeb.desc,
    price: dict.packages.cards.marcaWeb.price,
    delivery: dict.packages.cards.marcaWeb.delivery,
    includes: dict.packages.cards.marcaWeb.includes,
    excludes: dict.packages.cards.marcaWeb.excludes,
    demoHref: "/demo/marca-web",
    waText: dict.packages.cards.marcaWeb.waText,
  },
];

export const getCompareRows = (dict: Dictionary): CompareRow[] => [
  {
    label: dict.packages.compare.rows.logo.label,
    start: dict.packages.compare.rows.logo.start,
    pro: dict.packages.compare.rows.logo.pro,
    marcaWeb: dict.packages.compare.rows.logo.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.design.label,
    start: dict.packages.compare.rows.design.start,
    pro: dict.packages.compare.rows.design.pro,
    marcaWeb: dict.packages.compare.rows.design.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.pages.label,
    start: dict.packages.compare.rows.pages.start,
    pro: dict.packages.compare.rows.pages.pro,
    marcaWeb: dict.packages.compare.rows.pages.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.seo.label,
    start: dict.packages.compare.rows.seo.start,
    pro: dict.packages.compare.rows.seo.pro,
    marcaWeb: dict.packages.compare.rows.seo.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.analytics.label,
    start: dict.packages.compare.rows.analytics.start,
    pro: dict.packages.compare.rows.analytics.pro,
    marcaWeb: dict.packages.compare.rows.analytics.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.copy.label,
    start: dict.packages.compare.rows.copy.start,
    pro: dict.packages.compare.rows.copy.pro,
    marcaWeb: dict.packages.compare.rows.copy.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.integrations.label,
    start: dict.packages.compare.rows.integrations.start,
    pro: dict.packages.compare.rows.integrations.pro,
    marcaWeb: dict.packages.compare.rows.integrations.marcaWeb,
  },
  {
    label: dict.packages.compare.rows.revisions.label,
    start: dict.packages.compare.rows.revisions.start,
    pro: dict.packages.compare.rows.revisions.pro,
    marcaWeb: dict.packages.compare.rows.revisions.marcaWeb,
  },
];

export const getProcessSteps = (dict: Dictionary) =>
  [
    {
      number: "01",
      title: dict.process.steps.diagnostic.title,
      desc: dict.process.steps.diagnostic.desc,
      cta: dict.process.steps.diagnostic.cta,
      Icon: ClipboardList,
    },
    {
      number: "02",
      title: dict.process.steps.proposal.title,
      desc: dict.process.steps.proposal.desc,
      cta: null,
      Icon: Palette,
    },
    {
      number: "03",
      title: dict.process.steps.dev.title,
      desc: dict.process.steps.dev.desc,
      cta: null,
      Icon: Code2,
    },
    {
      number: "04",
      title: dict.process.steps.launch.title,
      desc: dict.process.steps.launch.desc,
      cta: null,
      Icon: Rocket,
    },
  ] as const;

export const getFaqItems = (dict: Dictionary) =>
  [
    {
      q: dict.faq.items.time.q,
      a: dict.faq.items.time.a,
    },
    {
      q: dict.faq.items.prep.q,
      a: dict.faq.items.prep.a,
    },
    {
      q: dict.faq.items.domain.q,
      a: dict.faq.items.domain.a,
    },
    {
      q: dict.faq.items.payment.q,
      a: dict.faq.items.payment.a,
    },
    {
      q: dict.faq.items.revisions.q,
      a: dict.faq.items.revisions.a,
    },
    {
      q: dict.faq.items.maintenance.q,
      a: dict.faq.items.maintenance.a,
    },
  ] as const;
