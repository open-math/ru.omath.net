# Схема комбинаторики

Комбинаторика [изучает](article|~/preface|combinatorics) составление комбинаций.
Особенно часто возникает вопрос подсчета количества тех или иных комбинаций.

Для ответа на этот вопрос используют два основных подхода, иногда задействуя сразу оба: **базовые правила** (правила [суммы](page|article|~/rules/sum) и [произведения](page|article|~/rules/product)) и **комбинаторные конфигурации** ([размещения](page|article|~/arrangement), [перестановки](page|article|~/permutation), [сочетания](page|article|~/combination) и [другие](article|composition)).

Схема основных правил и формул комбинаторики:

@diagram
    maxWidth: 300px
    content: |
        flowchart TB
            root[[**Подсчет комбинаций**]]
            root -->|Использовать базовые правила| rules[**Базовые правила**]
            root -->|Свести к типовым комбинациям| configurations[**Комбинаторные конфигруации**]

            rules[**Базовые правила**]
            rules -->|Разбить на группы| sumRule[Правило суммы]
            rules -->|Поочередно выбирать элементы| productRule[Правило произведения]

            configurations[**Комбинаторная конфигурация**] --> question{{Порядок элементов важен?}}

            question -->|Да| arrangement[**Размещение**]
            question -->|Нет| combination[**Сочетание**]

            arrangement -->|Без повторений| awr["$$ A_n^k = \frac{n!}{(n-k)!} $$"]
            arrangement -->|С повторениями| ar["$$ \bar{A}_n^k = n^k $$"]

            combination -->|Без повторений| cwr["$$ C_n^k = \frac{n!}{(n-k)! \ k!} $$"]
            combination -->|С повторениями| cr["$$ \bar{C}_n^k = C_{n+k-1}^k $$"]

            awr -->|Используются все элементы| permutation[**Перестановка**]

            permutation -->|Без повторений| pwr["$$ P_n = n! $$"]
            permutation -.->|С повторениями$^*$| pr["$$ P_{n_1, \ \ldots, \ n_k} = \frac{n!}{n_1! \ \ldots \ n_k!} $$"]

            class rules,configurations,arrangement,combination,permutation fill