import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Data = [
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-27 09:00",
    "Equipe1": "Beauce Etchemin",
    "Equipe2": "Beauce Centre",
    "Categorie": "2020"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-27 10:10",
    "Equipe1": "Thunderbirds",
    "Equipe2": "Patriotes",
    "Categorie": "2018"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-27 11:20",
    "Equipe1": "Griffons",
    "Equipe2": "Beauce Nord Lotbinière",
    "Categorie": "2019"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-27 12:30",
    "Equipe1": "Beauce Centre",
    "Equipe2": "Griffons",
    "Categorie": "2020"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-27 13:40",
    "Equipe1": "Castors B",
    "Equipe2": "Thunderbirds",
    "Categorie": "2018"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-27 14:50",
    "Equipe1": "Griffons",
    "Equipe2": "Beauce Etchemin",
    "Categorie": "2020"
  },

  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-27 11:10",
    "Equipe1": "Beauce Sud Bourret",
    "Equipe2": "Castors C",
    "Categorie": null
  },
  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-27 10:00",
    "Equipe1": "Beauce Nord Cloutier",
    "Equipe2": "Castors B",
    "Categorie": "2018"
  },

  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-27 13:00",
    "Equipe1": "Griffons",
    "Equipe2": "Patriotes",
    "Categorie": "2018"
  },
  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-27 14:10",
    "Equipe1": "Griffons",
    "Equipe2": "Beauce Sud Bourret",
    "Categorie": "2019"
  },
  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-27 15:20",
    "Equipe1": "Beauce Nord Lotbinière",
    "Equipe2": "Castors C",
    "Categorie": null
  },
  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-27 16:30",
    "Equipe1": "Beauce Nord Cloutier",
    "Equipe2": "Griffons",
    "Categorie": "2018"
  },

  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-28 09:00",
    "Equipe1": "Beauce Etchemin",
    "Equipe2": "Griffons",
    "Categorie": "2020"
  },
  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-28 10:10",
    "Equipe1": "Castors C",
    "Equipe2": "Griffons",
    "Categorie": "2019"
  },
  {
    "Emplacement": "St-Georges",
    "Date": "2025-12-28 11:20",
    "Equipe1": "Beauce Nord Lotbinière",
    "Equipe2": "Beauce Etchemin",
    "Categorie": "2019"
  },

  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-28 11:00",
    "Equipe1": "Patriotes",
    "Equipe2": "Beauce Nord Cloutier",
    "Categorie": "2018"
  },
  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-28 12:10",
    "Equipe1": "Griffons",
    "Equipe2": "Castors B",
    "Categorie": "2018"
  },
  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-28 13:20",
    "Equipe1": "Thunderbirds",
    "Equipe2": "Castors C",
    "Categorie": "2018"
  },
  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-28 14:30",
    "Equipe1": "Demi-finale 3e position",
    "Equipe2": "2e position",
    "Categorie": "2019"
  },
  {
    "Emplacement": "St-Prosper",
    "Date": "2025-12-28 15:45",
    "Equipe1": "Finale selon le classement",
    "Categorie": "2018"
  },

  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-28 12:00",
    "Equipe1": "Griffons",
    "Equipe2": "Beauce Nord",
    "Categorie": "2020"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-28 13:10",
    "Equipe1": "Concours d'échappée",
    "Categorie": "2018"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-28 13:50",
    "Equipe1": "Beauce Nord",
    "Equipe2": "Beauce Sud",
    "Categorie": "2020"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-28 15:00",
    "Equipe1": "Finale argent",
    "Categorie": "2018"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-28 16:10",
    "Equipe1": "Finale or",
    "Categorie": "2018"
  },
  {
    "Emplacement": "Beauceville",
    "Date": "2025-12-28 17:20",
    "Equipe1": "Gagnant demi-finale",
    "Equipe2": "1re position",
    "Categorie": "2019"
  }
];

function normalizeText(value) {
  return (value ?? "").toString().trim().toLowerCase();
}

function parseMatchDate(dateStr) {
  // Data format: "YYYY-MM-DD HH:mm"
  // Parse without timezone surprises: build Date(year, monthIndex, day, hour, minute).
  if (!dateStr) return null;
  const [datePart, timePart] = dateStr.split(" ");
  if (!datePart || !timePart) return null;
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm] = timePart.split(":").map(Number);
  if ([y, m, d, hh, mm].some((n) => Number.isNaN(n))) return null;
  return new Date(y, m - 1, d, hh, mm, 0, 0);
}

function formatDayHeader(date) {
  // ex: "Samedi 27 décembre"
  return date.toLocaleDateString("fr-CA", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

function formatTime(date) {
  // ex: "09:00"
  return date.toLocaleTimeString("fr-CA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

function formatSimpleDateTime(date) {
  // ex: "2025-12-27 9h00"
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()); // no leading zero
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d} ${hh}h${mm}`;
}

function formatSimpleDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatSimpleHour(date) {
  const hh = String(date.getHours());
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}h${mm}`;
}

export default function ChallengeBeauceDecembre2025() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("search") ?? "");
  const [selectedCategorie, setSelectedCategorie] = useState("");

  // Keep state in sync when user navigates back/forward or URL changes.
  useEffect(() => {
    const urlValue = searchParams.get("search") ?? "";
    setQuery((prev) => (prev === urlValue ? prev : urlValue));
  }, [searchParams]);

  // Push the search term into the URL (no reload).
  useEffect(() => {
    const nextValue = query.trim();
    const current = searchParams.get("search") ?? "";
    if (nextValue === current) return;

    const nextParams = new URLSearchParams(searchParams);
    if (!nextValue) nextParams.delete("search");
    else nextParams.set("search", nextValue);

    setSearchParams(nextParams, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, setSearchParams]);

  const matches = useMemo(() => {
    return Data
      .map((m) => {
        const dt = parseMatchDate(m.Date);
        return {
          ...m,
          _dt: dt,
          _dayKey: dt ? dt.toISOString().slice(0, 10) : "unknown"
        };
      })
      .sort((a, b) => {
        // sort by date/time, then by emplacement, then by team names
        const ad = a._dt ? a._dt.getTime() : Number.POSITIVE_INFINITY;
        const bd = b._dt ? b._dt.getTime() : Number.POSITIVE_INFINITY;
        if (ad !== bd) return ad - bd;
        const loc = (a.Emplacement ?? "").localeCompare(b.Emplacement ?? "", "fr");
        if (loc !== 0) return loc;
        return (a.Equipe1 ?? "").localeCompare(b.Equipe1 ?? "", "fr");
      });
  }, []);

  const categorieChips = useMemo(() => {
    const set = new Set();
    for (const m of matches) {
      set.add(m.Categorie ?? "Sans");
    }
    // order: numeric categories first, then others
    const values = Array.from(set);
    values.sort((a, b) => {
      const an = Number(a);
      const bn = Number(b);
      const aIsNum = !Number.isNaN(an) && String(a).trim() !== "";
      const bIsNum = !Number.isNaN(bn) && String(b).trim() !== "";
      if (aIsNum && bIsNum) return an - bn;
      if (aIsNum) return -1;
      if (bIsNum) return 1;
      return String(a).localeCompare(String(b), "fr");
    });
    return values;
  }, [matches]);

  const filtered = useMemo(() => {
    const q = normalizeText(query);
    return matches.filter((m) => {
      // category chip filter
      if (selectedCategorie) {
        const catRaw = m.Categorie ?? "Sans";
        if (String(catRaw) !== String(selectedCategorie)) return false;
      }

      // text search
      if (!q) return true;
      const e1 = normalizeText(m.Equipe1);
      const e2 = normalizeText(m.Equipe2);
      const cat = normalizeText(m.Categorie);
      return e1.includes(q) || e2.includes(q) || cat.includes(q);
    });
  }, [matches, query, selectedCategorie]);

  const groupedByDay = useMemo(() => {
    /** @type {Record<string, {header: string, date: Date | null, items: any[]}>} */
    const groups = {};
    for (const m of filtered) {
      const key = m._dayKey;
      if (!groups[key]) {
        groups[key] = {
          header: m._dt ? formatDayHeader(m._dt) : "Date inconnue",
          date: m._dt,
          items: []
        };
      }
      groups[key].items.push(m);
    }

    return Object.entries(groups)
      .sort(([, a], [, b]) => {
        const ad = a.date ? a.date.getTime() : Number.POSITIVE_INFINITY;
        const bd = b.date ? b.date.getTime() : Number.POSITIVE_INFINITY;
        return ad - bd;
      })
      .map(([key, group]) => ({ key, ...group }));
  }, [filtered]);

  return (
    <div className="tournoi-page">
      <style>{`
        .tournoi-page{max-width:1100px;margin:0 auto;padding:24px 16px;color:#111}
        .tournoi-header{display:flex;flex-direction:column;gap:12px;margin-bottom:18px}
        .tournoi-title{font-size:28px;line-height:1.2;margin:0}
        .tournoi-subtitle{margin:0;color:#444}
        .tournoi-searchRow{display:flex;flex-direction:column;gap:8px;align-items:stretch}
        .tournoi-search{display:flex;flex-direction:column;gap:6px;max-width:520px;width:100%;margin:0 auto}
        .tournoi-search input{width:80%;padding:10px 12px;border:1px solid rgba(0,0,0,.18);border-radius:12px;outline:none;font-size:14px; margin:0 auto;}
        .tournoi-search input:focus{border-color:rgba(0,0,0,.35);box-shadow:0 0 0 3px rgba(0,0,0,.06)}
        .tournoi-count{color:#444;font-size:13px;text-align:center;white-space:nowrap}
  .chips{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:6px}
  .chip{appearance:none;border:1px solid rgba(0,0,0,.14);background:#fff;color:#111;border-radius:999px;padding:6px 10px;font-size:12px;cursor:pointer;line-height:1}
  .chip:hover{background:rgba(0,0,0,.03)}
  .chip:focus-visible{outline:2px solid rgba(0,0,0,.35);outline-offset:2px}
  .chip-active{background:#111;color:#fff;border-color:#111}
        .jour{margin-top:18px;border-top:1px solid rgba(0,0,0,.08);padding-top:14px}
        .jour-title{margin:0 0 10px 0;font-size:18px;text-transform:capitalize}
        .match{display:grid;grid-template-columns:80px 1.4fr 1.4fr 120px 1fr;gap:10px;align-items:center;padding:12px 14px;border:1px solid rgba(0,0,0,.08);border-radius:14px;background:#fff;margin-bottom:12px;box-shadow:0 2px 10px rgba(0,0,0,.04)}
  .match-time{font-variant-numeric:tabular-nums;font-weight:700;line-height:1.2;white-space:normal}
  .match-date{white-space:nowrap;font-size:12px;color:#666;font-weight:600}
  .match-hour{margin-top:2px;font-size:14px;color:#111;white-space:nowrap;font-weight:bold}
        .match-vs{display:none}
        .match-label{display:block;font-size:11px;color:#666;margin-bottom:2px}
        .match-team{font-weight:600}
        .pill{display:inline-flex;align-items:center;justify-content:center;padding:6px 10px;border-radius:999px;border:1px solid rgba(0,0,0,.12);background:rgba(0,0,0,.03);font-size:12px}
        .muted{color:#666}
        @media (max-width: 840px){
          .tournoi-page{padding:18px 12px}
          .tournoi-title{font-size:24px}
          .jour-title{font-size:17px;text-align:center}
          .match{grid-template-columns:1fr;gap:10px;padding:14px}
          .match-time{font-size:14px;text-align:center}
          .match-vs{display:block;text-align:center;color:#666;font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-top:-6px}
          .match-visitor, .match-local{padding:10px 12px;border:1px solid rgba(0,0,0,.06);border-radius:12px;background:rgba(0,0,0,.018)}
          .match-team{font-size:16px}
          .match-cat, .match-loc{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;border:1px dashed rgba(0,0,0,.12);border-radius:12px}
          .match-cat .match-label, .match-loc .match-label{margin:0;font-size:12px}
        }
      `}</style>

      <div className="tournoi-header">
        <h1 className="tournoi-title">Challenge Beauce — Décembre 2025</h1>
        <p className="tournoi-subtitle">Horaire des matchs (recherche dans Équipe visiteuse / Équipe locale)</p>

        <div className="tournoi-searchRow">
          <div className="tournoi-search">
            <label className="match-label" htmlFor="tournoi-search">
              Rechercher une équipe / catégorie
            </label>
            <input
              id="tournoi-search"
              type="text"
              value={query}
              placeholder="Ex: Griffons, Beauce, Thunderbirds…"
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />

            <div className="chips" aria-label="Filtrer par catégorie">
              <button
                type="button"
                className={`chip ${selectedCategorie === "" ? "chip-active" : ""}`}
                onClick={() => setSelectedCategorie("")}
              >
                Toutes
              </button>
              {categorieChips.map((c) => (
                <button
                  key={String(c)}
                  type="button"
                  className={`chip ${String(selectedCategorie) === String(c) ? "chip-active" : ""}`}
                  onClick={() => setSelectedCategorie(String(c))}
                >
                  {c === "Sans" ? "Sans catégorie" : String(c)}
                </button>
              ))}
            </div>
          </div>
          <div className="tournoi-count">
            {filtered.length} partie{filtered.length > 1 ? "s" : ""}
            {query.trim() ? " (filtré)" : ""}
          </div>
        </div>
      </div>

      {groupedByDay.length === 0 ? (
        <p className="muted">Aucun match ne correspond à la recherche.</p>
      ) : (
        groupedByDay.map((day) => (
          <section key={day.key} className="jour">
            <h2 className="jour-title">{day.header}</h2>

            {day.items.map((m, idx) => {
              const dt = m._dt;
              const dateLabel = dt ? formatSimpleDate(dt) : "";
              const hourLabel = dt ? formatSimpleHour(dt) : "";
              const cat = m.Categorie ?? "—";
              const equipe2 = m.Equipe2 ?? "—";
              return (
                <div key={`${m.Date}-${m.Emplacement}-${idx}`} className="match">
                  <div className="match-time">
                    <div className="match-date">{dateLabel}</div>
                    <div className="match-hour">{hourLabel}</div>
                  </div>
                  <div className="match-vs">VS</div>

                  <div className="match-visitor">
                    <span className="match-label">Équipe visiteuse</span>
                    <div className="match-team">{m.Equipe1 ?? "—"}</div>
                  </div>

                  <div className="match-local">
                    <span className="match-label">Équipe locale</span>
                    <div className="match-team">{equipe2}</div>
                  </div>

                  <div className="match-cat">
                    <span className="match-label">Catégorie</span>
                    <span className="pill">{cat}</span>
                  </div>

                  <div className="match-loc">
                    <span className="match-label">Emplacement</span>
                    <div className="match-team">{m.Emplacement ?? "—"}</div>
                  </div>
                </div>
              );
            })}
          </section>
        ))
      )}
    </div>
  );
}
