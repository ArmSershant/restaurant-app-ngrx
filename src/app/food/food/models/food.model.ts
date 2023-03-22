export class Food {
  constructor(
    public id: string,
    public name: string,
    public price: number | null,
    public description: string,
    public category: string,
    public ischecked: boolean
  ) {}
}
