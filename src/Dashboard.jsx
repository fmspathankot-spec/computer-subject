import { useState } from "react";
import Chapter1Guide from "./pages/chapter1/Guide";
import Chapter1QA from "./pages/chapter1/QA";

const lessons = [
  {
    id: 1,
    chapter: "Chapter 1",
    title: "Fundamentals of Python",
    emoji: "🐍",
    color: "#4ade80",
    bgGrad: "linear-gradient(135deg, #052e16 0%, #0f172a 100%)",
    border: "#16a34a",
    topics: ["Introduction to Python", "Data Types", "Variables", "Operators", "Conditional Statements", "Loops"],
    pages: [
      { id: "guide", label: "📖 Study Notes", desc: "Poora chapter notes + interactive quiz" },
      { id: "qa",    label: "✅ Q&A Solved",  desc: "Saare questions solved in Hinglish" }
    ],
    status: "complete"
  },
  {
    id: 2,
    chapter: "Chapter 2",
    title: "Coming Soon…",
    emoji: "🔜",
    color: "#64748b",
    bgGrad: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    border: "#334155",
    topics: ["Stay tuned!"],
    pages: [],
    status: "soon"
  },
  {
    id: 3,
    chapter: "Chapter 3",
    title: "Coming Soon…",
    emoji: "🔜",
    color: "#64748b",
    bgGrad: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    border: "#334155",
    topics: ["Stay tuned!"],
    pages: [],
    status: "soon"
  }
];

export default function Dashboard() {
  const [view, setView] = useState("home"); // home | guide | qa

  if (view === "guide") return (
    <div>
      <button onClick={() => setView("home")} style={backBtnStyle}>← Dashboard par wapas jao</button>
      <Chapter1Guide />
    </div>
  );

  if (view === "qa") return (
    <div>
      <button onClick={() => setView("home")} style={backBtnStyle}>← Dashboard par wapas jao</button>
      <Chapter1QA />
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── HEADER ── */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1a0a2e 60%, #0f172a 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "28px 20px 22px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: 44, marginBottom: 8 }}>🎓</div>
        <p style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", margin: "0 0 6px" }}>
          Subject
        </p>
        <h1 style={{
          fontSize: 30, fontWeight: 900, margin: "0 0 4px",
          background: "linear-gradient(90deg, #4ade80, #60a5fa, #a78bfa)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          Computer Science
        </h1>
        <p style={{ color: "#475569", fontSize: 13, margin: "6px 0 0" }}>
          Python Programming • Class Notes & Solved Q&A
        </p>

        {/* Stats bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 18 }}>
          {[
            { val: "1", label: "Chapter Done" },
            { val: "6", label: "Topics Covered" },
            { val: "∞", label: "Aur aayenge!" }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ color: "#4ade80", fontSize: 22, fontWeight: 900 }}>{s.val}</div>
              <div style={{ color: "#475569", fontSize: 10 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── LESSONS ── */}
      <div style={{ padding: "24px 16px" }}>
        <p style={{ color: "#475569", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
          📚 All Chapters
        </p>

        {lessons.map((lesson) => (
          <div key={lesson.id} style={{
            background: lesson.bgGrad,
            border: `1px solid ${lesson.border}`,
            borderRadius: 16,
            marginBottom: 20,
            overflow: "hidden"
          }}>

            {/* Lesson Header */}
            <div style={{ padding: "18px 18px 14px", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: lesson.status === "complete" ? `${lesson.color}22` : "#1e293b",
                border: `2px solid ${lesson.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26, flexShrink: 0
              }}>{lesson.emoji}</div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: lesson.color, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                    {lesson.chapter}
                  </span>
                  {lesson.status === "complete" && (
                    <span style={{ background: "#14532d", color: "#86efac", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100, border: "1px solid #22c55e" }}>
                      ✅ Complete
                    </span>
                  )}
                  {lesson.status === "soon" && (
                    <span style={{ background: "#1e293b", color: "#475569", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 100 }}>
                      🔜 Coming Soon
                    </span>
                  )}
                </div>
                <h2 style={{ color: "#f1f5f9", fontSize: 17, fontWeight: 800, margin: 0 }}>{lesson.title}</h2>
              </div>
            </div>

            {/* Topics chips */}
            <div style={{ padding: "0 18px 14px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {lesson.topics.map((t, i) => (
                <span key={i} style={{
                  background: "#0f172a",
                  border: `1px solid ${lesson.border}`,
                  color: lesson.status === "complete" ? "#94a3b8" : "#334155",
                  fontSize: 11, padding: "4px 10px", borderRadius: 100, fontWeight: 500
                }}>{t}</span>
              ))}
            </div>

            {/* Action Buttons */}
            {lesson.status === "complete" && (
              <div style={{ padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                {lesson.pages.map((page) => (
                  <button key={page.id} onClick={() => setView(page.id)} style={{
                    background: "#0a1628",
                    border: `1px solid ${lesson.color}44`,
                    borderRadius: 12,
                    padding: "12px 16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10
                  }}>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ color: lesson.color, fontSize: 14, fontWeight: 700 }}>{page.label}</div>
                      <div style={{ color: "#475569", fontSize: 11, marginTop: 2 }}>{page.desc}</div>
                    </div>
                    <span style={{ color: lesson.color, fontSize: 20 }}>→</span>
                  </button>
                ))}
              </div>
            )}

            {lesson.status === "soon" && (
              <div style={{ padding: "0 18px 18px" }}>
                <div style={{
                  background: "#0f172a", border: "1px dashed #334155", borderRadius: 12,
                  padding: "14px 16px", textAlign: "center"
                }}>
                  <p style={{ color: "#334155", fontSize: 13, margin: 0 }}>🔒 Jald hi upload hoga…</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div style={{
          background: "#0a1628", border: "1px solid #1e293b", borderRadius: 12,
          padding: 16, textAlign: "center", marginTop: 8
        }}>
          <p style={{ color: "#334155", fontSize: 12, margin: 0 }}>
            🙏 <strong style={{ color: "#475569" }}>Ram Ram Ji</strong> — Mehnat karo, safalta milegi! 💪
          </p>
        </div>
      </div>
    </div>
  );
}

const backBtnStyle = {
  position: "fixed", top: 12, left: 12, zIndex: 999,
  background: "#1e293b", color: "#94a3b8",
  border: "1px solid #334155", borderRadius: 8,
  padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 700
};
