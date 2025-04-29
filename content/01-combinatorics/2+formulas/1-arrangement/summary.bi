@diagram
    graph TD
        arrangement[Размещение] -->|Без повторений| awr["$$ A_n^k = \frac{n!}{(n-k)!} $$"]
        arrangement -->|С повторениями| ar["$$ \bar{A}_n^k = n^k $$"]

        class arrangement fill

---

Многие задачи сводятся к тому, что есть $n$ видов элементов, из которых надо сформировать комбинации размером $k$, причем порядок следования элементов **имеет** значение.

Таким комбинациям решили дать общее название: "размещения из $n$ по $k$" -- из $n$ (элементов) по $k$ (вакантным местам).
В зависимости от того, допустимо ли повторение элементов, размещения разделяют на два типа:

<~ article|a-repeat

<~ article|a-examples

<~ article|a-unique

<~ article|a-unique-examples

---

Формулы для вычисления количества размещений с повторениями и без них очень похожи.
С повторениями это цепочка из $k$ умножений числа $n$ на само себя.
Без повторений это цепочка из $k$ умножений уменьшающихся на единицу множителей, начиная с числа $n$:

<~ article|a-repeat-formula

<~ article|a-repeat-formula-example

{ #arrangement-unique }
@statement
    title: Число размещений без повторений
    main: |
        $$ A_n^k = n \cdot (n-1) \cdot \ldots \cdot (n-k+1) $$

        $$ A_n^k = \frac{n!}{(n-k)!} $$
    sections:
        proof: |
            Смотрите доказательства [верхнего](article|a-unique-formula) и [нижнего](article|a-unique-factorial-formula) равенств в статье.

<~ article|a-unique-formula-example