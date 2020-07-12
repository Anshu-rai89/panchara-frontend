/**
 * @author Ankit Kumar <hello@ankdev.me> (https://ankdev.me)
 */

export const getBaseFontSize = () => {
    const html = document.getElementsByTagName("HTML")[0];
    const fontSize = parseFloat(html.style.fontSize.split("px")[0]);
    return fontSize;
};

export const handleChange = () => {
    const baseWidowSize = 1366;
    const html = document.getElementsByTagName("HTML")[0];
    if (window.innerWidth > baseWidowSize) {
        console.log("Font size is:", `${(16 / baseWidowSize) * window.innerWidth}px`);
        html.style.fontSize = `${(16 / baseWidowSize) * window.innerWidth}px`;
    } else {
        html.style.fontSize = "16px";
    }
};
