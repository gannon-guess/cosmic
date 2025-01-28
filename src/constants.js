// link required for new members to join from site
export const discord_link = 'https://discord.com/invite/xc9MTRb9Hs'
export const signup_url = "https://forms.gle/o7JiHavvevEPctW96";

// function to import to change the current page view
export function changeView(viewer, setViewer, newView) {
    if(viewer !== newView) {
        setViewer(newView);
    }
}
