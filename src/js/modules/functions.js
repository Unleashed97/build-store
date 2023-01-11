export const sidebarNavToggleList = () => {
    const navListBtns = document.querySelectorAll('.nav__btn')

    navListBtns.forEach((btn) =>
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            const parentNavItem = btn.closest('.nav__item')

            const subListWrapper = parentNavItem.querySelector(
                '.nav__sublist-wrapper',
            )

            subListWrapper && subListWrapper.classList.toggle('active')
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
    const modalNextStepBtn = document.querySelector('.modal__next-step-btn')
    const modalBackBtn = document.querySelector('.modal__back-btn')
    const modalCompleteBtn = document.querySelector('.modal__complete-btn')

    if (modalNextStepBtn && modalBackBtn && modalCompleteBtn) {
        const sectionPassword = document.querySelector(
            '.section--profile-form-password',
        )
        const sectionProfileForm = document.querySelector(
            '.section--profile-form',
        )

        modalNextStepBtn.addEventListener('click', () => {
            sectionPassword.classList.add('active')
            sectionProfileForm.classList.remove('active')
        })

        modalBackBtn.addEventListener('click', () => {
            sectionPassword.classList.remove('active')
            sectionProfileForm.classList.add('active')
        })

        modalCompleteBtn.addEventListener('click', () => {
            modal.classList.remove('active')
            sectionPassword.classList.remove('active')
            sectionProfileForm.classList.add('active')
        })
    }

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

export const handleNav = () => {
    const currentLocation = location.href

    const navLinkList = document.querySelectorAll('.nav__link')

    navLinkList.forEach((navLink) => {
        if (currentLocation === navLink.href) {
            navLinkList.forEach((navLink) => navLink.classList.remove('active'))
            navLink.classList.add('active')
        }
    })
}
