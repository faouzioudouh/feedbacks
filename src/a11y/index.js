export default () => {
    const A11Y_CLASS = 'a11y-mode-enabled';
    const TAB_KEY = 9;
    let a11YModeEnabled = false;

    /**
     * Enable a11y mode, add a11y class to the body element.
     * @param {Event} 
     */
    const enableA11YMode = ({ keyCode }) => {
        if (keyCode === TAB_KEY && !a11YModeEnabled) {
            document.body.classList.add(A11Y_CLASS);
            a11YModeEnabled = true;
        }
    }

    /**
     * Disable a11y mode, remove a11y class from the body element.
     * @param {Event} 
     */
    const disableA11YMode = () => {
        if (a11YModeEnabled) {
            document.body.classList.remove(A11Y_CLASS);
            a11YModeEnabled = false;
        }
    }

    document.addEventListener('mousedown', disableA11YMode);
    document.addEventListener('keydown', enableA11YMode);
}
