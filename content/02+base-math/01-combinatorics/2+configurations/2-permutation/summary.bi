@diagram
    graph TD
        permutation[**Перестановка**] -->|Без повторений| pwr["$$ P_n = n! $$"]
        permutation -.->|С повторениями$^*$| pr["$$ P_{n_1, \ \ldots, \ n_k} = \frac{n!}{n_1! \ \ldots \ n_k!} $$"]

        class permutation fill

---

В комбинаторике часто встречаются задачи, в которых нужно составлять комбинации из **всех** имеющихся элементов.
Такие комбинации называют перестановками.

<~ article|permutation

<~ article|permutation-examples

<~ article|permutation-is-arrangement

---

<~ article|permutation-formula

<~ article|science-conf

---

Если среди элементов есть дубликаты, то обычная формула для подсчета перестановок работать не будет.
Нужно использовать ее обобщенный вариант:

<~ article|permutation-repeat-formula

<~ article|math-word

<~ article|different-repeat