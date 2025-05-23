Комбинаторика [изучает](article|~/preface|combinatorics) составление комбинаций.
Особенно часто возникает вопрос подсчёта количества тех или иных комбинаций.
Для ответа на этот вопрос используют два основных подхода, иногда задействуя сразу оба: основные правила и комбинаторные конфигурации.

@diagram
    flowchart TB
        root[[**Подсчёт комбинаций**]]
        root -->|Использовать базовые правила| rules[**Базовые правила**]
        root -->|Свести к типовым комбинациям| configurations[**Комбинаторные конфигурации**]

        class rules,configurations fill

# Базовые правила

Вся комбинаторика строится на двух основных правилах: [правиле суммы](page|article|~/rules/sum) и [правиле произведения](page|article|~/rules/product).

Правило сложения используется, когда сложную задачу нужно разбить на несколько независимых подзадач.
Сначала ведутся расчёты в этих подзадачах, а потом их результаты складываются, и получается ответ на основную задачу.

Правило произведения позволяет очень удобно находить количество способов составить конкретные виды комбинаций, шаг за шагом делая последовательные выборы.

@diagram
    graph TD
        rules[**Базовые правила**]
        rules -->|Разбить на группы| sumRule[Правило суммы]
        rules -->|Поочерёдно выбирать элементы| productRule[Правило произведения]

        class rules fill

Ещё правила часто используют в роли "связующего клея" между комбинаторными конфигурациями.

# Комбинаторные конфигурации

Комбинации бывают самые разные, на любой вкус и цвет.
Чтобы упростить себе жизнь, математики выделили несколько видов комбинаций, к которым можно свести большую часть всех комбинаторных задач.

Такие полезные виды комбинаций называют **типовыми комбинациями** или, по-умному, **комбинаторными конфигурациями**.
В их число входят [размещения](page|article|~/arrangement), [перестановки](page|article|~/permutation), [сочетания](page|article|~/combination) и [другие](composition), более редкие виды.

{ #composition }
@details
    Один из таких более редких примеров комбинаторных конфигураций -- [задача](practice|~/arrangement|number-composition) о композициях числа $n$, с разными разновидностями которой мы позже встречались и в [перестановках](practice|~/permutation|number-composition-strict), и в [сочетаниях](practice|~/combination|number-composition-zeros).

Все основные типовые комбинации мы уже детально изучили и закрепили задачами по-отдельности.
Теперь нужно из отдельно рассмотренных кусочков составить у себя в голове общую и цельную картину или **схему** основных формул базовой комбинаторики.

## Построение схемы

Во время составления комбинаций сразу возникает вопрос: а важен ли порядок расположения элементов?
Считать ли разными комбинации, состоящие из одних и тех же элементов, но расставленных в разном порядке?

@image
    src: assets/combination-arrangement-diff.svg
    maxWidth: 550px
    invert: dark
    caption: $1$ сочетание слева -- это $6$ размещений справа и наоборот

Мы уже встречались как с [задачами](page|practice|~/arrangement), в которых порядок элементов имеет значение, так и с [задачами](page|practice|~/combination), в которых важны только выбранные элементы.

Два ответа на вопрос о важности порядка элементов ("Да" и "Нет") порождают две базовые комбинаторные конфигурации: размещения и сочетания.
Каждая из них разделяется на две формулы в зависимости от того, можно ли использовать один и тот же элемент повторно.

Среди всех размещений без повторений отдельно выделяют случаи, когда размещения составляются с использованием всех доступных элементов.
Такие размещения называют перестановками.

Схема основных комбинаторных конфигураций с формулами:

{ #configurations }
@diagram
    flowchart TD
        root[**Комбинаторная конфигурация**] --> question{{Порядок элементов важен?}}

        question -->|Да| arrangement[**Размещение**]
        question -->|Нет| combination[**Сочетание**]

        arrangement -->|Без повторений| awr["$$ A_n^k = \frac{n!}{(n-k)!} $$"]
        arrangement -->|С повторениями| ar["$$ \bar{A}_n^k = n^k $$"]

        combination -->|Без повторений| cwr["$$ C_n^k = \frac{n!}{(n-k)! \ k!} $$"]
        combination -->|С повторениями| cr["$$ \bar{C}_n^k = C_{n+k-1}^k $$"]

        awr -->|Используются все элементы| permutation[**Перестановка**]

        permutation -->|Без повторений| pwr["$$ P_n = n! $$"]
        permutation -.->|С повторениями$^*$| pr["$$ P_{n_1, \ \ldots, \ n_k} = \frac{n!}{n_1! \ \ldots \ n_k!} $$"]

        class root,arrangement,combination,permutation fill

Перестановки с повторениями на схеме выделены звёздочкой, потому что это [не такие же](article|~/permutation|different-repeat) повторения, как у размещений и сочетаний.
Каждый элемент по-прежнему можно использовать только один раз, просто среди элементов есть несколько дубликатов.
