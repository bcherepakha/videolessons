// Создать функцию createURL(templateURL, params),
// которая на основе шаблона и параметров формирует URL

const url = createURL(
    `/api/countries/{country}/regions/{region}/`,
    {
        country: `Ukraine`,
        region: `Kiev`
    }
);

console.log(url); // `/api/countries/Ukraine/regions/Kiev/`

function createURL(templateURL, params) {
    return templateURL.replace(/\{(\w+)\}/ig, function(template, group1) {
        return params[group1] || template;
    });
}
