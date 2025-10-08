# 🧮 Auto-Hide Counter App (React)

A simple React app demonstrating how to use **`useState`** to manage state and dynamically hide or show buttons based on the counter value.

---

## 🧩 Algorithm / Logic Flow

1. **Initialize State:**
   - `count` → stores current counter value (starts from 0)
   - `visible` → controls button visibility

2. **Increment Logic (`increment()`):**
   - Increases `count` by 1
   - If `count >= 5` → hides *Increase* button (`setVisible(false)`)

3. **Decrement Logic (`decrement()`):**
   - Decreases `count` by 1
   - If `count <= 0` → shows *Increase* button (`setVisible(true)`)

4. **Reset Logic (`reset()`):**
   - Sets `count` to 0
   - Sets `visible` to `true` (shows *Increase* button)

5. **Rendering Logic:**
   - If `visible` → show *Increase* button
   - If not `visible` → show *Decrease* button
   - *Reset* button always visible

---

## 🧠 Concept Behind It
React’s **`useState`** hook manages both **data** and **UI visibility**.  
When a state variable changes, React re-renders only the affected UI section automatically.  
This is the power of React’s “state-driven rendering.”

---

## ⚙️ Example Output

| Count | Button Shown |
|--------|---------------|
| 0–4    | Increase       |
| 5+     | Decrease       |

---
 
