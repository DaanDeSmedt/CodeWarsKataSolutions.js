/*
    Title: Total pressure calculation

    Description:
    Given the molecular mass of two molecules $M1$ and $M2$, their masses present $m1$ and $m2$ in a vessel of volume $V$ at a specific temperature $T$, find the total pressure $P_{total}$ exerted by the molecules. Formula to calculate the pressure is:
    
    \LARGE P{total} = {{({{m1} \over {M1}} + {{m2} \over {M_2}}) R T} \over V}
    
    Input
    
    Six values :
     $M1$, $M2$: molar masses of both gases, in grams ($g$)
     $m1$ and $m2$: present mass of both gases, in  $\ g \cdot mol^{-1}$
     $V$: volume of the vessel, in $\ dm^3$
     $T$: temperature, in $\ \degree C$
    
    Output
    
    One value: $P_{total}$, in units of $atm$.
    
    Notes
    
    Remember: Temperature is given in Celsius while SI unit is Kelvin ($K$). $\ 0\degree C = 273.15K$
    
    The gas constant $\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1}$

    Link to Kata : https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
*/
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return ((((givenMass1 * 0.001) / molarMass1 + (givenMass2 * 0.001) / molarMass2) * 0.082 * (temp + 273.15)) / volume) * 1000;
}