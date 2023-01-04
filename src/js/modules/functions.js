export const sidebarNavToggleList = () => {
    const navListBtns = document.querySelectorAll('.nav__btn')

    navListBtns.forEach((btn) =>
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            const parentNavItem = btn.closest('.nav__item')

            const subListWrapper = parentNavItem.querySelector(
                '.nav__sublist-wrapper',
            )

            subListWrapper.classList.toggle('active')
        }),
    )
}

export const sidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar')
    const sidebarOpenBtn = document.querySelector('.burger')
    const sidebarCloseBtn = document.querySelector('.sidebar__close')

    sidebarOpenBtn.addEventListener('click', () => {
        sidebar.classList.add('active')
    })

    sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active')
    })
}

export const handleEmployeeModal = () => {
    const modal = document.querySelector('.modal--profile')

    if (modal) {
        const modalOpenBtn = document.querySelector(
            '.filters__controls-add-employee',
        )
        const modalCloseBtn = modal.querySelector('.modal-btn-close')

        modalOpenBtn.addEventListener('click', () => {
            modal.classList.add('active')
        })

        modalCloseBtn.addEventListener('click', () => {
            modal.classList.remove('active')
        })

        window.addEventListener('click', ({ target }) => {
            if (target === modal) {
                modal.classList.remove('active')
            }
        })
    }
}

export const handleGoodModal = () => {
    const modal = document.querySelector('.modal--good')

    if (modal) {
        const modalOpenBtn = document.querySelector('.modal-good-add')
        const modalCloseBtn = modal.querySelector('.modal-btn-close')

        modalOpenBtn.addEventListener('click', () => {
            modal.classList.add('active')
        })

        modalCloseBtn.addEventListener('click', () => {
            modal.classList.remove('active')
        })

        window.addEventListener('click', ({ target }) => {
            if (target === modal) {
                modal.classList.remove('active')
            }
        })
    }
}
export const handleOrderModal = () => {
    const modal = document.querySelector('.modal--order')

    if (modal) {
        const modalGoodRow = document.querySelectorAll(
            '.table--orders > .table__body .table__row',
        )
        const modalCloseBtn = modal.querySelector('.modal-btn-close')

        modalGoodRow.forEach((goodRow) =>
            goodRow.addEventListener('click', () => {
                modal.classList.add('active')
            }),
        )

        modalCloseBtn.addEventListener('click', () => {
            modal.classList.remove('active')
        })

        window.addEventListener('click', ({ target }) => {
            if (target === modal) {
                modal.classList.remove('active')
            }
        })
    }
}
