@problem
    title: Отбрасываем лишнее
    level: easy
    description: |
        Вы хотите посчитать, сколько разных результатов можно получить при броске двух идеальных игральных костей.
        Какие из предложений ниже можно отбросить при решении этой комбинаторной задачи?

        1. Одна кость сделана из дерева, а другая из пластика.
        2. Обе игральные кости имеют 6 сторон.
        3. Если разных результатов окажется больше 10, то сегодня вечером идём в кино.
        4. Вчера шёл дождь.
    answer: |
        Все предложения, кроме второго, не имеют отношения к рассматриваемой задаче.
    hint: |
        Вспомните, чем комбинаторика [не занимается](article|cut-the-crap).
        На основе этого определите, какие пункты не влияют на решение задачи.
    solution: |
        Идеальные кости могут упасть на любую свою сторону с одинаковой вероятностью.
        Материал изготовления у такой кости ни на что не влияет.
        Поэтому первое предложение можно отбросить.

        Количество сторон у костей напрямую влияет на количество результатов при броске, поэтому отбрасывать второе предложение нельзя.

        Третье предложение относится к нашим действиям уже после решения задачи.
        Значит, в процессе решения оно нам не пригодится.
        Отбрасываем.

        Четвёртое утверждение вообще не относится к задаче.