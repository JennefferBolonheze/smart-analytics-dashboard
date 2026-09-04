from flask import Flask, render_template
from analysis import (
    load_data,
    calculate_kpis,
    sales_by_category,
    sales_by_region,
    monthly_sales
)

app = Flask(__name__)


@app.route("/")
def dashboard():

    df = load_data()

    kpis = calculate_kpis(df)
    categories = sales_by_category(df)
    regions = sales_by_region(df)
    months = monthly_sales(df)

    # Dados completos para os filtros do JavaScript
    records = df.copy()

    records["date"] = (
        records["date"]
        .dt.strftime("%Y-%m-%d")
    )

    records = records.to_dict(
        orient="records"
    )

    return render_template(
        "index.html",
        kpis=kpis,
        categories=categories,
        regions=regions,
        months=months,
        records=records
    )


if __name__ == "__main__":
    app.run(debug=True)