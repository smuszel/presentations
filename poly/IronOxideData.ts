const alphaPhase = {
    structure: 'spinel',
    criticalTemperature: 600,
};

const betaPhase = {
    structure: 'corundum',
    criticalTemperature: 750,
};

const gammaPhase = {
    structure: 'cubic',
    criticalTemperature: 900,
};

type IronOxidePhase = typeof alphaPhase | typeof betaPhase | typeof gammaPhase;

class IronOxide {
    phase: IronOxidePhase = alphaPhase;
}

const shouldTransform = (currentTemp: number, oxide: IronOxide) => {
    return oxide.phase.criticalTemperature < currentTemp;
};
