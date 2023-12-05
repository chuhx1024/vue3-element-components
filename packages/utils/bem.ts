// block 代码块  element 元素  modifier 装饰

// z-button
// z-botton__element
// z-button_-element--disabled
// is-checked is-enabeld

// :class=[bem.b('button)]

const _bem = (
    prefixName:string,
    blockSuffix: string,
    element: string,
    modifier: string,
) => {
    if (blockSuffix) {
        prefixName += `-${blockSuffix}`
    }
    if (element) {
        prefixName += `__${element}`
    }
    if (modifier) {
        prefixName += `--${modifier}`
    }
    return prefixName
}

const createBRM = (prefixName: string) => {
    const b = (blockSuffix: string = '') => _bem(prefixName,blockSuffix, '','' )
    const e = (element: string = '') => _bem(prefixName,'', element,'' )
    const m = (modifier: string = '') => _bem(prefixName,'', '', modifier )

    const be = (blockSuffix: string = '', element: string = '') => _bem(prefixName,blockSuffix, element,'' )
    const bm = (blockSuffix: string = '', modifier: string = '') => _bem(prefixName,blockSuffix, '',modifier )

    const em = (element: string = '', modifier: string = '') => _bem(prefixName,'', element,modifier )

    const bem = (blockSuffix: string = '', element: string = '', modifier: string = '') => _bem(prefixName,blockSuffix, element, modifier )

    const is = (name: string, state) => (state ? `is-${name}` : '')


    return {
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is
    }

}

export const createNamespace = (name: string) => {
    const prefixName = `chu-${name}` 
    return createBRM(prefixName)
    
}

// const bem = createNamespace('button')
// console.log(bem.b('box'))
// console.log(bem.e('box'))
// console.log(bem.m('box'))
// console.log(bem.bem('box', 'element', 'modifier'))
// console.log(bem.is('checked', ''))
// console.log(bem.is('checked', true))