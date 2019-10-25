{
    interface IronOxidePhase {
        structure: string;
        criticalTemperature: number;
    }

    class AlphaPhase implements IronOxidePhase {
        structure = 'spinel';
        criticalTemperature = 600;
    }

    class BetaPhase implements IronOxidePhase {
        structure = 'corundum';
        criticalTemperature = 750;
    }

    class GammaPhase implements IronOxidePhase {
        structure = 'cubic';
        criticalTemperature = 900;
    }

    const shouldTransform = (currentTemp: number, oxide: IronOxidePhase) => {
        return oxide.criticalTemperature < currentTemp;
    };
}
