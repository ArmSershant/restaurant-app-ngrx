export class Food {
  constructor(
    public id:  number,
    public name: string,
    public price: number | null,
    public description: string,
    public category: string,
    public ischecked: boolean
  ) {}
}
