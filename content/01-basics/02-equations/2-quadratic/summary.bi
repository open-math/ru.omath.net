@diagram
    content: |
        flowchart TB
            quadraticPolynom["**Квадратный трёхчлен:**$$ Ax^2 + Bx + C, \enspace A \neq 0 $$"]
            quadraticPolynom -->|Трёхчлен равен $0$| quadraticEquation["**Квадратное уравнение:**$$ Ax^2 + Bx + C = 0, \enspace A \neq 0 $$"]
            quadraticEquation -->|"Выделение полного квадрата<br>(преобразовывая уравнение)"| discriminant["**Дискриминант:**$$ D = B^2 - 4AC $$"]
            discriminant -->|$D < 0$| noRoots["Корней нет"]
            discriminant -->|$D = 0$| oneRoot["Один корень:$$ x = -\frac{B}{2A} $$"]
            discriminant -->|$D > 0$| quadraticFormula["Два корня:$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]

            quadraticPolynom -->|"Выделение полного квадрата<br>(эквивалентными преобразованиями)"| factorsFormula["**Разложение на множители:**$$ A(x - x_1)(x - x_2) $$"]
            quadraticFormula --> factorsFormula
            factorsFormula -->|Раскрытие скобок| vieta["**Теорема Виета:**$$ \begin{cases} x_1 + x_2 = -\frac{B}{A} \\ x_1 x_2 = \frac{C}{A} \end{cases} $$"]
    caption:
        main: Общая схема понятий и формул
        secondary: Стрелки указывают порядок логики вывода

---

@diagram
    content: |
        flowchart LR
            quadraticEquation["Квадратное уравнение:$$ Ax^2 + Bx + C = 0, \enspace A \neq 0 $$"]
            quadraticEquation -->|Универсальный способ 1| quadraticFormula["**Общие формулы корней:**$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A}, \quad D = B^2 - 4AC $$"]
            quadraticEquation -->|Универсальный способ 2| completeSquare["**Выделение полного квадрата:**$$ a^2 \pm 2ab + b^2 = (a\pm b)^2 $$"]
            quadraticEquation -->|$B$ или $C$ равны нулю| incomplete["**Неполное квадратное уравнение:**$$ Ax^2 + Bx = 0 \enspace \text{или} \enspace Ax^2 + C = 0 $$"]
            quadraticEquation -->|Решение в уме| vieta["**Теорема Виета:**$$ \begin{cases} x_1 + x_2 = -\frac{B}{A} \\ x_1 x_2 = \frac{C}{A} \end{cases} $$"]
    caption: Способы решения квадратных уравнений

# Основные понятия

<~ article|quadratic-polynom

<~ article|quadratic-equation

<~ article|power-not-order

<~ article|quadratic-equation-examples

# Неполное квадратное уравнение

<~ article|incomplete-quadratic-equation

Любое неполное квадратное уравнение является [элементарным уравнением](page|article|../elementary) и может быть решено простейшими преобразованиями:

<~ article|b-zero-examples

<~ article|c-zero-examples

# Общие формулы

Любой квадратный трёхчлен можно "запаковать" в одну из двух формул сокращённого умножения: квадрат суммы и квадрат разности.
Процесс такой "упаковки" называется **выделением полного квадрата**.

<~ article|completing-the-square-diagram

При помощи выделения полного квадрата можно решать любые квадратные уравнения:

<~ article|completing-the-square-equations

Если же отбросить частные случаи и попытаться выделить полный квадрат из квадратного уравнения в **общем виде**, то получится вывести универсальные формулы для решения любого квадратного уравнения:

<~ article|quadratic-equation-roots

<~ article|quadratic-equation-solving

# Разложение на множители

Выделить полный квадрат можно не только из квадратного уравнения, но и напрямую из квадратного трёхчлена, используя эквивалентные преобразования.
Тогда получится интересный результат -- любой квадратный трёхчлен с корнями можно представить в виде произведения.
Процесс перехода от формы через сложение к форме умножения называется **разложением квадратного трёхчлена на множители**.

<~ article|quadratic-polynom-factors

<~ article|quadratic-polynom-factors-examples

Разложение на множители используется для упрощения сложных выражений с квадратами и решения неравенств.

# Формулы Виета

Если в разложенном на множители квадратном трёхчлене раскрыть скобки, то получится связать его корни с коэффициентами $A$, $B$ и $C$:

<~ article|vieta-formulas

Формулы Виета используются для анализа квадратных уравнений и удобного их построения.
Кроме того, с их помощью квадратные уравнения с "красивыми" корнями можно решать в уме.

<~ article|vieta-formulas-examples

# Быстрое решение квадратных уравнений

<~ article|monic-quadratic-equation

Оказывается, существует удобная связь между корнями неприведённого квадратного уравнения и его "приведённого" варианта, когда коэффициент $A$ "перенесли" к коэффициенту $C$:

<~ article|cast-to-monic

Эту связь можно использовать для решения в уме даже неприведённых квадратных уравнений:

<~ article|cast-to-monic-examples