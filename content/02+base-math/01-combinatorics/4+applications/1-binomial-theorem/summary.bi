~ combinations article|~/combination|combination-formula

@diagram
    graph TD
        root[**Бином Ньютона**] --> formula["$$ (a+b)^n = \sum\limits_{k=0}^n C_n^k a^{n-k}b^k = \sum\limits_{k=0}^n T_k $$"]
        root --> c["$$ C_n^k = \binom{n}{k} = \frac{n!}{(n-k)! \ k!} $$"]
        c <-.->|Треугольник Паскаля| pascal["$$ \begin{array}{} 1 \\ 1 \quad 1 \\ 1 \quad 2 \quad 1 \\ 1 \quad 3 \quad 3 \quad 1 \\ 1 \quad 4 \quad 6 \quad 4 \quad 1 \end{array} \\ \cdots $$"]

        class root fill

# Умножение многочленов

Умножение многочленов можно рассматривать как составление всех комбинаций из одночленов этих самых многочленов.
Такой **комбинаторный** способ умножения многочленов не только проще и нагляднее, но и позволяет задействовать в этом процессе всю мощь комбинаторики:

<~ article|polynom-product

# Бином Ньютона

Вручную умножать друг на друга большое количество многочленов очень долго и утомительно.
Поэтому математики придумали формулу для работы со степенями двучленов:

<~ article|binom

Многочлены имеют и другое название -- полиномы.\
Соответственно, двучлен -- бином.

<~ article|short-product

Длинную цепочку из слагаемых после применения формулы бинома Ньютона называют **разложением** степени бинома:

$$ \underbrace{(a+b)^2}_{\text{Степень бинома}} = \ \ \underbrace{a^2 + 2ab + b^2}_{\text{Разложение}} $$

<~ article|real

# Общий член разложения

Иногда бывает полезно точечно изучить конкретное слагаемое, полученное после применения формулы бинома Ньютона, без необходимости выписывать всё разложение целиком.
Такие слагаемые обозначают $T_k$, где $k$ -- номер слагаемого в разложении:

<~ article|term

<~ article|find-and-write

# Биномиальный коэффициент

<~ article|binomial-coeff

Левое обозначение это [количество сочетаний](~combinations) из $n$ по $k$ -- понятие из комбинаторики, которое нашло удобное применение в формуле бинома Ньютона.
Правый способ сложился исторически, без связи с комбинаторикой.
Его придумали специально для формулы бинома Ньютона.

<~ article|binomial-coeff-equality

<~ article|binom-coeff-repeat

Биномиальные коэффициенты можно считать с помощью треугольника Паскаля -- через предыдущие биномиальные коэффициенты, выписанные в виде треугольника:

<~ article|triangle-calc

# Применение бинома Ньютона

<~ article|useful-tool