async function includeHTML(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

includeHTML('header-include', '/partials/header.html');
includeHTML('footer-include', '/partials/footer.html');