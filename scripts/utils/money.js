export function formatCurrency(priceCents){
    return (priceCents / 100).toFixed(2);  
}

// Default export can use only once, Each file can only have 1 default export
export default formatCurrency;