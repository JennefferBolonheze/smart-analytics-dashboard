import pandas as pd


def load_data():
    df = pd.read_csv("data/sales_data.csv")

    df["date"] = pd.to_datetime(df["date"])

    return df


def calculate_kpis(df):
    total_sales = df["sales"].sum()

    total_orders = len(df)

    average_ticket = df["sales"].mean()

    total_customers = df["customer"].nunique()

    return {
        "total_sales": round(total_sales, 2),
        "total_orders": total_orders,
        "average_ticket": round(average_ticket, 2),
        "total_customers": total_customers
    }


def sales_by_category(df):
    result = (
        df.groupby("category")["sales"]
        .sum()
        .sort_values(ascending=False)
    )

    return result.to_dict()


def sales_by_region(df):
    result = (
        df.groupby("region")["sales"]
        .sum()
        .sort_values(ascending=False)
    )

    return result.to_dict()


def monthly_sales(df):
    monthly = (
        df.groupby(df["date"].dt.to_period("M"))["sales"]
        .sum()
    )

    return {
        str(month): value
        for month, value in monthly.items()
    }


if __name__ == "__main__":
    data = load_data()

    print("KPIs:")
    print(calculate_kpis(data))

    print("\nVendas por categoria:")
    print(sales_by_category(data))

    print("\nVendas por região:")
    print(sales_by_region(data))

    print("\nVendas por mês:")
    print(monthly_sales(data))