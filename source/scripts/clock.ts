class Tick {
    constructor(
        public seconds: number,
        public minutes: number,
        public hours: number,
    ) {}

    public static get(): Tick {
        const date = new Date();
        return new Tick(date.getSeconds(), date.getMinutes(), date.getHours());
    }

    public static ticks(cb: (tick: Tick) => void): number {
        cb(Tick.get());
        return setInterval(() => cb(Tick.get()), 1000);
    }
}

export class Clock {
    private intervalId: number;

    private $secondHandContainer: HTMLElement;
    private $minuteHandContainer: HTMLElement;
    private $hourHandContainer: HTMLElement;

    constructor(private $clock: HTMLElement) {
        this.$secondHandContainer = <HTMLElement>this.$clock.querySelector('.dial .second-container');
        this.$minuteHandContainer = <HTMLElement>this.$clock.querySelector('.dial .minute-container');
        this.$hourHandContainer = <HTMLElement>this.$clock.querySelector('.dial .hour-container');
    }

    public start() {
        if (!this.intervalId)
            this.intervalId = Tick.ticks(tick => this.setAngles(tick));
    }

    public stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private setAngles(tick: Tick) {
        this.secondHandAngle = tick.seconds * 6;
        this.minuteHandAngle = tick.minutes * 6;
        this.hourHandAngle = (tick.hours * 30) + (tick.minutes / 2);
    }

    private set secondHandAngle(degrees: number) {
        this.$secondHandContainer.style.transform = `rotateZ(${degrees}deg)`;
        this.$secondHandContainer.style.webkitTransform = `rotateZ(${degrees}deg)`;
    }

    private set minuteHandAngle(degrees: number) {
        this.$minuteHandContainer.style.transform = `rotateZ(${degrees}deg)`;
        this.$minuteHandContainer.style.webkitTransform = `rotateZ(${degrees}deg)`;
    }

    private set hourHandAngle(degrees: number) {
        this.$hourHandContainer.style.transform = `rotateZ(${degrees}deg)`;
        this.$hourHandContainer.style.webkitTransform = `rotateZ(${degrees}deg)`;
    }
}
