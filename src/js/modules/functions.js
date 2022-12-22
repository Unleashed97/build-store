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
