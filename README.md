# mortgage-calculator

This component is a mortgage calculator. It takes in a loan amount, interest rate, and loan term and calculates the
monthly payment.

## Usage

To include this component in your project, add the folder `mortgage-calculator` to your `app` folder. Then, in your
main page, import the component and add it to your page.

[//]: # (Example:)

```tsx
import MortgageCalc from "@/app/mortgage-calculator/mortgage-calc"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MortgageCalc bttnText={"Prueba"} link={"https://github.com/Braulio-Palagot"}/>
        </main>
    )
}
```

## Props

| bttnText | link | p | r | n |
| -------- | ---- | - | - | - |
| string   | string | number | number | number |

| bttnText | link | p | r | n         |
| -------- | ---- | - | - |-----------|
| The text that will appear on the button | The link that will be redirected to | The principal amount of the loan | The interest rate of the loan | The term of the loan in years |

You can either pass the props from your main page or fill them in the component itself. If you pass the props from your
main page, the component will automatically fill the inputs with the values you passed and calculate the monthly payment.
If you fill the props in the component itself, the inputs will load empty and you will have to fill them in order to
calculate the monthly payment.
