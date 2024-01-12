const imessage_fpr = document.getElementById('imessage-fpr');
document.getElementById('imessage').addEventListener('click', () => {
        imessage_fpr.toggleAttribute('hidden')
    }
)

imessage_fpr.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(imessage_fpr.innerText)
        console.info('Password copied to clipboard');
    } catch(e){
        console.error('Failed to copy: ', e);
    }
})