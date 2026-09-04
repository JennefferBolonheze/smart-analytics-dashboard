// =========================
// DADOS RECEBIDOS DO FLASK
// =========================

const allData = JSON.parse(
    document.getElementById(
        "dashboard-data"
    ).textContent
);


// =========================
// ELEMENTOS
// =========================

const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );

const regionFilter =
    document.getElementById(
        "regionFilter"
    );

const clearFilters =
    document.getElementById(
        "clearFilters"
    );

const totalSalesElement =
    document.getElementById(
        "totalSales"
    );

const totalOrdersElement =
    document.getElementById(
        "totalOrders"
    );

const averageTicketElement =
    document.getElementById(
        "averageTicket"
    );

const totalCustomersElement =
    document.getElementById(
        "totalCustomers"
    );

const categoryList =
    document.getElementById(
        "categoryList"
    );

const regionList =
    document.getElementById(
        "regionList"
    );


// =========================
// FORMATAÇÃO
// =========================

function formatCurrency(value) {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(value);

}


// =========================
// AGRUPAR VALORES
// =========================

function groupSales(data, field) {

    const result = {};

    data.forEach(item => {

        const key =
            item[field];

        if (!result[key]) {
            result[key] = 0;
        }

        result[key] +=
            Number(item.sales);

    });

    return result;

}


// =========================
// VENDAS POR MÊS
// =========================

function groupMonthlySales(data) {

    const result = {};

    data.forEach(item => {

        const date =
            new Date(
                item.date + "T00:00:00"
            );

        const month =
            date.toLocaleDateString(
                "pt-BR",
                {
                    month: "short",
                    year: "numeric"
                }
            );

        if (!result[month]) {
            result[month] = 0;
        }

        result[month] +=
            Number(item.sales);

    });

    return result;

}


// =========================
// CONFIGURAÇÕES CHART.JS
// =========================

Chart.defaults.color =
    "#bbaab3";

Chart.defaults.font.family =
    "Arial, Helvetica, sans-serif";


// =========================
// GRÁFICO DE CATEGORIA
// =========================

const categoryChart =
    new Chart(
        document.getElementById(
            "categoryChart"
        ),
        {
            type: "bar",

            data: {
                labels: [],
                datasets: [
                    {
                        label:
                            "Vendas (R$)",

                        data: [],

                        backgroundColor: [
                            "#ef8fb2",
                            "#d779a0",
                            "#bb6d9d",
                            "#a965a0",
                            "#8d5c9f",
                            "#754f91"
                        ],

                        borderRadius: 8,

                        borderSkipped:
                            false
                    }
                ]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    x: {

                        grid: {
                            display: false
                        }

                    },

                    y: {

                        beginAtZero:
                            true,

                        grid: {
                            color:
                                "#33232b"
                        }

                    }

                }

            }

        }
    );


// =========================
// GRÁFICO DE REGIÃO
// =========================

const regionChart =
    new Chart(
        document.getElementById(
            "regionChart"
        ),
        {
            type: "doughnut",

            data: {
                labels: [],
                datasets: [
                    {
                        data: [],

                        backgroundColor: [
                            "#ef8fb2",
                            "#d97fa7",
                            "#bc6fa0",
                            "#9e6499",
                            "#80598f"
                        ],

                        borderColor:
                            "#1a1117",

                        borderWidth:
                            4
                    }
                ]
            },

            options: {

                responsive: true,

                cutout: "67%",

                plugins: {

                    legend: {

                        position:
                            "bottom",

                        labels: {

                            padding:
                                20,

                            usePointStyle:
                                true

                        }

                    }

                }

            }

        }
    );


// =========================
// GRÁFICO MENSAL
// =========================

const monthlyChart =
    new Chart(
        document.getElementById(
            "monthlyChart"
        ),
        {
            type: "line",

            data: {
                labels: [],
                datasets: [
                    {
                        label:
                            "Receita mensal",

                        data: [],

                        borderColor:
                            "#ef8fb2",

                        backgroundColor:
                            "rgba(239, 143, 178, 0.12)",

                        fill: true,

                        tension: 0.4,

                        borderWidth: 3,

                        pointRadius: 5,

                        pointBackgroundColor:
                            "#f5a0bd"
                    }
                ]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    x: {

                        grid: {
                            display: false
                        }

                    },

                    y: {

                        beginAtZero:
                            true,

                        grid: {
                            color:
                                "#33232b"
                        }

                    }

                }

            }

        }
    );


// =========================
// ATUALIZA AS LISTAS
// =========================

function updateList(
    element,
    data
) {

    element.innerHTML = "";

    const entries =
        Object.entries(data)
            .sort(
                (a, b) =>
                    b[1] - a[1]
            );

    if (
        entries.length === 0
    ) {

        element.innerHTML =
            `
            <div class="data-row">
                <span class="data-name">
                    Nenhum dado encontrado
                </span>
            </div>
            `;

        return;
    }


    entries.forEach(
        ([name, value]) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "data-row";

            row.innerHTML =
                `
                <span class="data-name">
                    ${name}
                </span>

                <span class="data-value">
                    ${formatCurrency(value)}
                </span>
                `;

            element.appendChild(
                row
            );

        }
    );

}


// =========================
// ATUALIZA DASHBOARD
// =========================

function updateDashboard() {

    const selectedCategory =
        categoryFilter.value;

    const selectedRegion =
        regionFilter.value;


    const filteredData =
        allData.filter(
            item => {

                const categoryMatch =
                    selectedCategory ===
                        "Todos" ||
                    item.category ===
                        selectedCategory;

                const regionMatch =
                    selectedRegion ===
                        "Todos" ||
                    item.region ===
                        selectedRegion;

                return (
                    categoryMatch &&
                    regionMatch
                );

            }
        );


    // =====================
    // KPIs
    // =====================

    const totalSales =
        filteredData.reduce(
            (total, item) =>
                total +
                Number(item.sales),
            0
        );

    const totalOrders =
        filteredData.length;

    const averageTicket =
        totalOrders > 0
            ? totalSales /
                totalOrders
            : 0;

    const customers =
        new Set(
            filteredData.map(
                item =>
                    item.customer
            )
        );


    totalSalesElement.textContent =
        formatCurrency(
            totalSales
        );

    totalOrdersElement.textContent =
        totalOrders;

    averageTicketElement.textContent =
        formatCurrency(
            averageTicket
        );

    totalCustomersElement.textContent =
        customers.size;


    // =====================
    // AGRUPAMENTOS
    // =====================

    const categories =
        groupSales(
            filteredData,
            "category"
        );

    const regions =
        groupSales(
            filteredData,
            "region"
        );

    const months =
        groupMonthlySales(
            filteredData
        );


    // =====================
    // LISTAS
    // =====================

    updateList(
        categoryList,
        categories
    );

    updateList(
        regionList,
        regions
    );


    // =====================
    // GRÁFICO CATEGORIA
    // =====================

    categoryChart.data.labels =
        Object.keys(
            categories
        );

    categoryChart
        .data
        .datasets[0]
        .data =
            Object.values(
                categories
            );

    categoryChart.update();


    // =====================
    // GRÁFICO REGIÃO
    // =====================

    regionChart.data.labels =
        Object.keys(
            regions
        );

    regionChart
        .data
        .datasets[0]
        .data =
            Object.values(
                regions
            );

    regionChart.update();


    // =====================
    // GRÁFICO MENSAL
    // =====================

    monthlyChart.data.labels =
        Object.keys(
            months
        );

    monthlyChart
        .data
        .datasets[0]
        .data =
            Object.values(
                months
            );

    monthlyChart.update();

}


// =========================
// EVENTOS DOS FILTROS
// =========================

categoryFilter.addEventListener(
    "change",
    updateDashboard
);

regionFilter.addEventListener(
    "change",
    updateDashboard
);


clearFilters.addEventListener(
    "click",
    () => {

        categoryFilter.value =
            "Todos";

        regionFilter.value =
            "Todos";

        updateDashboard();

    }
);


// =========================
// CARREGA DASHBOARD
// =========================

updateDashboard();