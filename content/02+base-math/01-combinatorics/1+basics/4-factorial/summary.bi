@diagram
    graph TD
        root[**Цепочка умножений**] --> question{{Начинается с $1$?}}

        question -->|Да| f[**Факториал**]
        question -->|Нет| df[**Убывающий факториал**]

        f -->|Прямая формула| f-formula["$$ n! $$"]
        f -->|Рекуррентная формула| f-recurrent["$$ n! = (n-1)! \cdot n $$"]

        df --> df-formula["$$ n^{\underline{k}} = \frac{n!}{(n-k)!} $$"]

        class root,f,df fill

---

Для удобной записи и работы с длинными цепочками умножений последовательных чисел был придуман факториал:

<~ article|factorial

<~ article|factorial-examples

Факториал числа можно посчитать через факториал предыдущего числа.
Подобные формулы, когда следующий результат получется через предыдущий, называются рекуррентными:

<~ article|factorial-recurrent

Рекуррентная формула позволяет гибко манипулировать самим факториалом, убирая или добавляя в него множители.
Это позволяет сильно упростить сложные выражения с факториалами:

<~ article|recurrent-examples

---

Часто цепочки умножений не включают в себя единицу.
Для произвольных цепочек умножений придумали убывающий факториал:

<~ article|falling-factorial

<~ article|falling-factorial-examples

Значение убывающего факториала можно удобным образом выразить через обычные факториалы:

<~ article|falling-factorial-formula

---

<~ article|zero-factorial-meaning