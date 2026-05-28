import { useState } from "react";

const sections = [
  {
    id: "fillblanks",
    title: "A. Fill in the Blanks",
    emoji: "✏️",
    color: "#fbbf24",
    questions: [
      {
        q: "In Python, ___ defines a block of statements.",
        a: "indentation",
        explanation: "Indentation matlab code ke shuru mein spaces dena. Python mein yeh bahut zaroori hai — bina indentation ke code kaam nahi karta! Doosri languages mein indentation sirf 'sundar dikhane' ke liye hoti hai, lekin Python mein yeh COMPULSORY hai."
      },
      {
        q: "Operator ___ describes the order in which operations are performed.",
        a: "precedence",
        explanation: "Precedence matlab 'pehle kaun?'. Jaise maths mein pehle × aur ÷ hoti hai, phir + aur −, Python mein bhi aisa hi hota hai. PEMDAS rule yaad karo: Parentheses → Exponentiation → Multiplication/Division → Addition/Subtraction."
      },
      {
        q: "The for loop in Python is used to ___ over a sequence or other iterable objects.",
        a: "iterate",
        explanation: "Iterate matlab ek ek karke har cheez ko check karna. Jaise ek dabbe mein 10 toffee hain aur tum ek ek karke nikaalte ho — yahi hai iteration! for loop hume list, string, tuple etc. ke har item par kaam karne deta hai."
      },
      {
        q: "The continue keyword is used to ___ the current iteration in a loop.",
        a: "end / skip",
        explanation: "Continue keyword current iteration ko SKIP karta hai aur loop aage badh jaata hai. Jaise queue mein koi banda aya aur tumne kaha 'is baar skip' — agle pe chale jao. Loop band nahi hoti, bas ek chakkar skip ho jaata hai."
      },
      {
        q: "A ___ is a collection of key-value pairs that are not ordered.",
        a: "dictionary",
        explanation: "Dictionary Python mein bhi waise hi kaam karta hai jaise real dictionary mein — word (key) dho aur uska meaning (value) milta hai. Example: {'name': 'Rahul', 'age': 15} — yahan 'name' key hai aur 'Rahul' value hai."
      }
    ]
  },
  {
    id: "mcq",
    title: "B. Tick the Correct Option (MCQ)",
    emoji: "☑️",
    color: "#34d399",
    questions: [
      {
        q: "Among the following, who is the developer of Python programming?",
        options: ["YK Khendrakar", "Mark Zuckerberg", "Guido van Rossum", "Denis Ritchie"],
        a: "Guido van Rossum",
        explanation: "Guido van Rossum ne 1991 mein Python banaya tha. Unka naam yaad rakho! Mark Zuckerberg Facebook ke founder hain, Denis Ritchie ne C language banaya tha."
      },
      {
        q: "List, tuple, and set are the ___ of data types.",
        options: ["Default Types", "Binary Types", "Sequence", "Boolean Types"],
        a: "Sequence",
        explanation: "List, tuple, aur set — teeno mein ek sequence (order) hoti hai items ki. Isliye inhe sequence data types kehte hain. Boolean sirf True/False ke liye hota hai."
      },
      {
        q: "What is the name of the operator ** in Python?",
        options: ["Modulus", "Floor division", "Multiplication", "Exponentiation"],
        a: "Exponentiation",
        explanation: "** matlab 'power of'. Jaise 2**3 = 8 (2 ki power 3 = 2×2×2). Yeh PEMDAS mein doosre number par aata hai — bahut bada operator hai! Modulus (%) remainder deta hai, Floor division (//) poora quotient deta hai."
      },
      {
        q: "Conditional statements are also known as ___",
        options: ["Loops", "Array", "List", "Decision-making statements"],
        a: "Decision-making statements",
        explanation: "if, if-else, if-elif-else — ye sab decision lete hain. Bilkul jaise tumhara dimaag decide karta hai: 'Agar barish ho toh chhaata lo, warna mat lo.' Isliye inhe decision-making statements kehte hain."
      },
      {
        q: "If a=7; print('Greater') — What will be the output?",
        options: ["No output", "7", "Greater", "Error"],
        a: "Greater",
        explanation: "a=7 hai aur a>4 check hoga (since condition is a>4). 7 > 4 = True, toh 'Greater' print hoga. Yeh ek simple if statement hai."
      }
    ]
  },
  {
    id: "whoami",
    title: "C. Who Am I?",
    emoji: "🕵️",
    color: "#a78bfa",
    questions: [
      {
        q: "I am a comparison operator that is used to check the equality of two values.",
        a: "== (double equal to)",
        explanation: "== operator do values compare karta hai. Dhyaan raho: = (ek equal) assignment ke liye hai, == (do equal) comparison ke liye hai. Example: if x == 5: matlab 'agar x ki value 5 hai toh...'"
      },
      {
        q: "I am one of the conditional statements in Python that allows you to check multiple conditions.",
        a: "elif",
        explanation: "elif = 'else if' ka short form. Jab pehli condition False ho toh elif check hota hai. Ek program mein bahut saare elif ho sakte hain. if → elif → elif → else — ek chain ki tarah."
      },
      {
        q: "I am a statement in Python that ends the execution of a loop.",
        a: "break",
        explanation: "break loop ko turant band kar deta hai. Jaise koi alarm baje aur tum apna kaam beech mein chhod do. Loop ke baad wala code normal chalata rehta hai."
      },
      {
        q: "I am a function in Python used to generate a set of numbers within the specified range.",
        a: "range()",
        explanation: "range() ek series of numbers generate karta hai. range(1, 11) matlab 1 se 10 tak (11 include nahi). range(0, 10, 2) matlab 0, 2, 4, 6, 8 — step 2 se jump karo. for loop ke saath bahut use hota hai!"
      },
      {
        q: "I am a built-in data type in Python which represents one of two values, True or False.",
        a: "bool (Boolean)",
        explanation: "Boolean sirf do values rakh sakta hai: True ya False. Yeh conditions mein bahut kaam aata hai. Jaise: is_raining = True, is_sunny = False. Comparison operators ka result bhi Boolean hota hai."
      }
    ]
  },
  {
    id: "truefalse",
    title: "D. True or False",
    emoji: "✅",
    color: "#f472b6",
    questions: [
      {
        q: "The type() function can be used to get the data type of any object.",
        a: "TRUE ✅",
        explanation: "Bilkul sahi! type() function kisi bhi variable ka data type batata hai. Jaise: type(5) → <class 'int'>, type('hello') → <class 'str'>, type(3.14) → <class 'float'>. Bahut useful function hai debugging mein!"
      },
      {
        q: "The % operator returns the quotient.",
        a: "FALSE ❌",
        explanation: "Galat! % (modulus) REMAINDER deta hai, quotient nahi. Quotient // (floor division) deta hai. Example: 10 % 3 = 1 (remainder), 10 // 3 = 3 (quotient). Yeh common mistake hai — dhyaan rakhna!"
      },
      {
        q: "The if statement is the most fundamental decision-making statement.",
        a: "TRUE ✅",
        explanation: "Haan! if statement sabse basic aur sabse pehla decision-making statement hai. Baaki sab (if-else, elif) isi se aage bade hain. if condition ki basic structure: if condition: → code execute karo."
      },
      {
        q: "In Python, an else statement comes right after the block after if.",
        a: "TRUE ✅",
        explanation: "Haan, else hamesha if ke baad aata hai. else ka koi condition nahi hota — jab if ka condition False ho, toh else wala block chalata hai. else optional hai — har if ke saath else banana zaroori nahi."
      },
      {
        q: "Loop control statements change the execution of the statements from their normal sequence.",
        a: "TRUE ✅",
        explanation: "Haan! break aur continue — dono loop ke normal flow ko change karte hain. break loop band karta hai, continue current iteration skip karta hai. Dono 'normal sequence' se hatate hain execution ko."
      }
    ]
  },
  {
    id: "answers",
    title: "E. Answer the Following Questions",
    emoji: "📝",
    color: "#60a5fa",
    questions: [
      {
        q: "Differentiate between a for loop and a while loop.",
        a: `FOR LOOP vs WHILE LOOP:

for loop:
• Jab pata ho kitni baar chalana hai tab use karo
• Iterable (list, string, range) par kaam karta hai  
• Syntax: for var in iterable:
• Example: for i in range(5): print(i)

while loop:
• Jab tak condition True ho tab tak chalta hai
• Condition check pehle hoti hai
• Syntax: while condition:
• Example: while count < 5: count += 1

KEY DIFFERENCE: for loop ek fixed sequence par chalta hai, while loop condition-based hai.`,
        explanation: "Ek simple trick yaad rakho: 'for loop — ginti pata ho, while loop — condition pata ho'. Jaise: 'Print 1 to 10' → for loop. 'Jab tak user quit na kare' → while loop."
      },
      {
        q: "Differentiate between break and continue statement.",
        a: `BREAK vs CONTINUE:

break:
• Loop ko POORI TARAH band kar deta hai
• Loop ke baad ka code chalata hai
• Jaise: school mein bell baj gayi — sab kaam band!
• Example: if a[i] == 's': break

continue:
• Sirf CURRENT ITERATION skip karta hai
• Loop aage chalti rehti hai
• Jaise: queue mein ek banda skip — baaki sab theek
• Example: if a[i] == 'o': continue`,
        explanation: "Ek aur trick: break = 'band karo sab kuch', continue = 'yeh ek chhodo, aage badho'. Dono loop ke flow ko change karte hain lekin alag tarike se."
      },
      {
        q: "What are the different rules for declaring a variable?",
        a: `VARIABLE NAMING RULES:

✅ ALLOWED:
• Letter (a-z, A-Z) ya underscore (_) se shuru karo
• Alphanumeric characters use kar sakte ho
• Example: myVar, _age, student1

❌ NOT ALLOWED:
• Number se shuru mat karo → 2var ❌
• Special characters ($, *, %, @) mat use karo
• Python keywords use mat karo (if, for, while etc.)
• Spaces mat do → my var ❌

⚠️ REMEMBER:
• Variables case-sensitive hote hain: name ≠ Name ≠ NAME`,
        explanation: "Ek easy rule: 'Letter ya underscore se shuru karo, baaki sab theek hai (mostly)'. Aur hamesha meaningful names do — x = 5 se better hai age = 5."
      },
      {
        q: "What is data type? Name the basic data types used in Python.",
        a: `DATA TYPE kya hai?
Data type batata hai ki variable mein KIS PRAKAR ka data store hoga.

BASIC DATA TYPES in Python:

1. int → Poore numbers (integers)
   Example: age = 15

2. float → Decimal numbers
   Example: price = 99.99

3. str → Text/String
   Example: name = "Rahul"

4. bool → True ya False
   Example: is_pass = True

5. list → Ordered collection, changeable
   Example: marks = [85, 90, 78]

6. tuple → Ordered collection, NOT changeable
   Example: colors = ('red', 'blue')

7. dict → Key-value pairs
   Example: student = {'name': 'Rahul', 'age': 15}

8. set → Unique elements, unordered
   Example: fruits = {'apple', 'mango'}`,
        explanation: "Data types ko aise yaad karo: int = ginti, float = tola (decimal), str = text, bool = haan/na, list = changeable list, tuple = fixed list, dict = address book, set = unique collection."
      }
    ]
  },
  {
    id: "programs",
    title: "F. Write Python Programs",
    emoji: "💻",
    color: "#fb923c",
    questions: [
      {
        q: "Write a program to find the sum of digits in a number.",
        a: `n = int(input("Enter a number: "))
total = 0
while n > 0:
    digit = n % 10    # last digit nikalo
    total = total + digit  # sum mein add karo
    n = n // 10       # last digit hatao
print("Sum of digits:", total)

Example: 123 → 1+2+3 = 6`,
        explanation: "Logic samjho: 123 ka last digit nikalne ke liye 123 % 10 = 3. Phir 123 // 10 = 12. Phir 12 % 10 = 2. Phir 12 // 10 = 1. Phir 1 % 10 = 1. Total = 3+2+1 = 6. Yahi kaam while loop karta hai!"
      },
      {
        q: "Write a program to display the multiplication table of a number.",
        a: `num = int(input("Enter a number: "))
print("Multiplication Table of", num)
for i in range(1, 11):
    result = num * i
    print(num, "x", i, "=", result)

Example output for 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50`,
        explanation: "for loop 1 se 10 tak chalega (range(1,11)). Har baar num × i calculate hoga. range(1, 11) mein 11 included nahi — isliye 1 se 10 tak hi jayega."
      },
      {
        q: "Write a program to convert metres to centimetres.",
        a: `metres = float(input("Enter distance in metres: "))
centimetres = metres * 100
print(metres, "metres =", centimetres, "centimetres")

Example: 5 metres = 500 centimetres`,
        explanation: "Simple conversion: 1 metre = 100 centimetres. Isliye metres × 100 = centimetres. float() use kiya kyunki distance decimal mein bhi ho sakti hai (jaise 2.5 metres)."
      },
      {
        q: "Use range() function to print all numbers from 1 to 10.",
        a: `for i in range(1, 11):
    print(i)

Output:
1  2  3  4  5  6  7  8  9  10`,
        explanation: "range(1, 11) matlab 1 se shuru karo aur 11 se PEHLE rok jao — yaani 10 tak. Yeh bahut common mistake hai — range(1, 10) only goes to 9! Stop value included nahi hoti."
      },
      {
        q: "Write a program to calculate area of equilateral triangle with side = 7 cm.",
        a: `import math

side = 7  # side ki length

# Formula: Area = (√3 / 4) × side²
area = (math.sqrt(3) / 4) * (side ** 2)

print("Area of equilateral triangle:", area, "cm²")

Output: Area of equilateral triangle: 21.21... cm²`,
        explanation: "Equilateral triangle mein teeno side barabar hoti hain. Formula hai: (√3/4) × side². math.sqrt() se square root nikalte hain aur ** se power. math library ko pehle import karna padta hai!"
      },
      {
        q: "Write a program to get next and previous number of a given number.",
        a: `num = int(input("Enter a number: "))
previous = num - 1
next_num = num + 1
print("Previous number:", previous)
print("Given number:", num)
print("Next number:", next_num)

Example: Input 5 → Previous: 4, Next: 6`,
        explanation: "Bahut simple! Pehle wala number = num - 1, agle wala = num + 1. 'next' ek reserved word ho sakta hai Python mein, isliye 'next_num' use kiya — yeh good practice hai."
      }
    ]
  }
];

const CodeDisplay = ({ code }) => (
  <pre style={{
    background: "#0a1628",
    color: "#a5f3fc",
    padding: "14px 16px",
    borderRadius: "10px",
    fontSize: "12.5px",
    overflowX: "auto",
    lineHeight: 1.8,
    fontFamily: "'Fira Code', 'Courier New', monospace",
    border: "1px solid #1e3a5f",
    margin: "10px 0",
    whiteSpace: "pre-wrap"
  }}>{code}</pre>
);

export default function PythonQA() {
  const [activeSection, setActiveSection] = useState("fillblanks");
  const [openQ, setOpenQ] = useState(null);
  const [showExplain, setShowExplain] = useState({});

  const active = sections.find(s => s.id === activeSection);

  const toggleExplain = (i) => {
    setShowExplain(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const isCode = (text) => text.includes('\n') || text.includes('•') || text.includes(':');

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060d1a",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#e2e8f0"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a, #1a0533)",
        padding: "20px 20px 16px",
        borderBottom: "1px solid #1e293b",
        textAlign: "center"
      }}>
        <div style={{ fontSize: 32 }}>📚</div>
        <h1 style={{ color: "#f1f5f9", fontSize: 20, fontWeight: 800, margin: "4px 0 2px" }}>
          Chapter 1 — Solved Q&A
        </h1>
        <p style={{ color: "#64748b", fontSize: 12, margin: 0 }}>
          Saare questions solve kiye gaye hain • Hinglish mein explain kiya
        </p>
      </div>

      {/* Section Tabs */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: 8,
        padding: "12px 16px",
        background: "#0a1628",
        borderBottom: "1px solid #1e293b"
      }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => { setActiveSection(s.id); setOpenQ(null); setShowExplain({}); }} style={{
            background: activeSection === s.id ? s.color : "#1e293b",
            color: activeSection === s.id ? "#0f172a" : "#64748b",
            border: "none",
            borderRadius: 8,
            padding: "8px 14px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 12,
            whiteSpace: "nowrap"
          }}>{s.emoji} {s.title.split('.')[0]}.</button>
        ))}
      </div>

      {/* Section Title */}
      <div style={{
        margin: "16px 16px 12px",
        padding: "14px 16px",
        background: `linear-gradient(135deg, ${active.color}18, #1e293b)`,
        border: `1px solid ${active.color}44`,
        borderRadius: 12
      }}>
        <h2 style={{ color: active.color, fontSize: 17, fontWeight: 800, margin: 0 }}>
          {active.emoji} {active.title}
        </h2>
        <p style={{ color: "#64748b", fontSize: 12, margin: "4px 0 0" }}>
          {active.questions.length} questions • Answers + Hinglish Explanation
        </p>
      </div>

      {/* Questions */}
      <div style={{ padding: "0 16px 32px" }}>
        {active.questions.map((item, i) => (
          <div key={i} style={{
            background: "#0f172a",
            border: openQ === i ? `1px solid ${active.color}66` : "1px solid #1e293b",
            borderRadius: 12,
            marginBottom: 12,
            overflow: "hidden",
            transition: "border 0.2s"
          }}>
            {/* Question Header */}
            <button onClick={() => setOpenQ(openQ === i ? null : i)} style={{
              width: "100%",
              background: "transparent",
              border: "none",
              padding: "14px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              textAlign: "left"
            }}>
              <span style={{
                background: active.color,
                color: "#0f172a",
                borderRadius: "50%",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 800,
                flexShrink: 0,
                marginTop: 1
              }}>Q{i + 1}</span>
              <span style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600, flex: 1, lineHeight: 1.5 }}>
                {item.q}
              </span>
              <span style={{ color: active.color, fontSize: 18, flexShrink: 0 }}>
                {openQ === i ? "▲" : "▼"}
              </span>
            </button>

            {/* Answer */}
            {openQ === i && (
              <div style={{ padding: "0 16px 16px", borderTop: `1px solid ${active.color}22` }}>
                {/* MCQ Options */}
                {item.options && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "12px 0" }}>
                    {item.options.map((opt, j) => (
                      <div key={j} style={{
                        background: opt === item.a ? "#14532d" : "#1e293b",
                        border: opt === item.a ? "1px solid #22c55e" : "1px solid #334155",
                        borderRadius: 8,
                        padding: "8px 12px",
                        color: opt === item.a ? "#86efac" : "#64748b",
                        fontSize: 13,
                        fontWeight: opt === item.a ? 700 : 400
                      }}>
                        {opt === item.a ? "✅ " : ""}{opt}
                      </div>
                    ))}
                  </div>
                )}

                {/* Answer Box */}
                <div style={{
                  background: "#0a1628",
                  border: `1px solid ${active.color}44`,
                  borderRadius: 10,
                  padding: 14,
                  marginTop: item.options ? 0 : 12
                }}>
                  <p style={{ color: active.color, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 6, letterSpacing: 0.5 }}>
                    ✅ Answer
                  </p>
                  {isCode(item.a) ? (
                    <CodeDisplay code={item.a} />
                  ) : (
                    <p style={{ color: "#86efac", fontSize: 14, fontWeight: 700, margin: 0 }}>{item.a}</p>
                  )}
                </div>

                {/* Hinglish Explanation */}
                <button onClick={() => toggleExplain(i)} style={{
                  width: "100%",
                  background: showExplain[i] ? "#1e3a5f" : "#1e293b",
                  border: `1px solid ${showExplain[i] ? "#60a5fa" : "#334155"}`,
                  borderRadius: 10,
                  padding: "10px 14px",
                  cursor: "pointer",
                  textAlign: "left",
                  marginTop: 10,
                  color: showExplain[i] ? "#93c5fd" : "#64748b",
                  fontSize: 13,
                  fontWeight: 600,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span>🇮🇳 Hinglish mein samjho</span>
                  <span>{showExplain[i] ? "▲ chhupa lo" : "▼ dikhao"}</span>
                </button>

                {showExplain[i] && (
                  <div style={{
                    background: "#0a1e38",
                    border: "1px solid #1e3a5f",
                    borderRadius: 10,
                    padding: 14,
                    marginTop: 4
                  }}>
                    <p style={{ color: "#7dd3fc", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
                      💡 {item.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer tip */}
      <div style={{
        margin: "0 16px 24px",
        background: "#0a1628",
        border: "1px solid #1e293b",
        borderRadius: 12,
        padding: 14,
        textAlign: "center"
      }}>
        <p style={{ color: "#64748b", fontSize: 12, margin: 0 }}>
          💪 <strong style={{ color: "#94a3b8" }}>Tip:</strong> Har question ko pehle khud solve karo, phir answer check karo. Practice se hi expert bante hain!
        </p>
      </div>
    </div>
  );
}
