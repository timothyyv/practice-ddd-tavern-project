/** Transaction value object, not mutable */

export default interface Transaction {
    amount: number,
    from: string,
    to: string,
    createdAt: Date
}
