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
