'use client'

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {JSX, useState} from "react";
import Link from "next/link";

/*
 * Component: MortgageCalc
 * Description: This component is a mortgage calculator that takes in the following props:
 * bttnLink: boolean. If true, a button will be rendered, as well as a link to another page.
 * bttnText: string. The text that will be rendered on the button.
 * link: string. The link that will be navigated to when the link is clicked.
 * p: number. The default principal amount.
 * r: number. The default interest rate.
 * n: number. The default loan term in years.
 *
 * The component will render a mortgage calculator with the given default values if they are provided.
 *
 * Author: Braulio Palagot
 * Date: 13 December 2023
 */
export default function MortgageCalc({bttnText = "", link = "#", p = 0, r = 0, n = 0}) {
    // The following are the states for the principal amount, interest rate, and loan term in years, as well as the loan term in months.
    // The default values are provided by the props.
    const [prinAmt, setPrinAmt] = useState(p);
    const [rate, setRate] = useState(r);
    const [termYears, setTermYears] = useState(n)
    const [months, setMonths] = useState(n * 12);
    const constant: number = 1

    // The following functions are used to update the states.
    const updatePrinAmt = () => (e) => setPrinAmt(e.target.value)
    const updateRate = () => (e) => setRate(e.target.value)
    const updateTermYears = () => (e) => {
        setTermYears(e.target.value)
        setMonths(e.target.value * 12)
    }

    // This function is used to test the optional button. Here it's posible to add any functionality to the button.
    const optionalFunc = () => {
        alert("Optional Function.")
    }

    // If the bttnText prop exists, then the button and link will be rendered.
    // Otherwise, the button and link will not be rendered.
    const bttnLink = bttnText !== "" ? (
        <CardFooter
            className='flex flex-col lg:flex-row xl:flex-row md:justify-end lg:justify-end xl:justify-end gap-8'>
            <Link className='w-full lg:w-auto xl:w-auto'
                  href={link}
                  style={{textAlign: 'center'}}
                  target='_blank'>Link</Link>
            <Button className='w-full lg:w-auto xl:w-auto'
                    onClick={() => optionalFunc()}>{bttnText}</Button>
        </CardFooter>
    ) : null

    // The following is the JSX that will be rendered.
    return (
        <Card>
            <CardHeader>
                <CardTitle>Mortgage Monthly Payment Calculator</CardTitle>
                <CardDescription>
                    This calculator will compute a mortgage's monthly payment amount based on the principal amount
                    borrowed, the length of the loan and the annual interest rate.
                </CardDescription>
            </CardHeader>
            <CardContent className='grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <Label className='mb-2'>Principal Loan Amount</Label>
                    <Input type='number' defaultValue={p} value={prinAmt} onChange={updatePrinAmt()}
                           placeholder='Loan Amount'/>
                    <span>{prinAmt}</span>
                </div>
                <div className='col-span-12 lg:col-span-6 xl:col-span-6'>
                    <Label className='mb-2'>Annual Interest Rate</Label>
                    <Input type='number' defaultValue={r} value={rate} onChange={updateRate()} min={0} max={1}
                           step={0.01} placeholder='Interest Rate'/>
                    <span>{rate}</span>
                </div>
                <div className='col-span-12 lg:col-span-6 xl:col-span-6'>
                    <Label className='mb-2'>Loan Term in Years</Label>
                    <Input type='number' z defaultValue={n} value={termYears} onChange={updateTermYears()}
                           placeholder='Loan Term'/>
                    <span>{months}</span>
                </div>
                <div className='col-span-12'>
                    <Label className='mb-2'>Monthly Payment</Label>
                    <Input type='number' contentEditable={false}
                           value={(prinAmt * (rate * Math.pow(parseFloat('1') + parseFloat(rate), months))) / (Math.pow(parseFloat('1') + parseFloat(rate), months) - 1)}/>
                </div>
            </CardContent>
            {bttnLink}
        </Card>
    )
}