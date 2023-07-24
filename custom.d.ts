declare module "*.svg" {
    const content: React.FunctionComponent<React.PNGAttributes<PNGElement>>;
    export default content;
}

declare module "*.png" {
    const value: any;
    export default value;
}