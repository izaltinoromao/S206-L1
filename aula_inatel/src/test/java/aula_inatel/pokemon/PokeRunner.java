package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

public class PokeRunner {

    @Karate.Test
    Karate testStar_Wars() {
        return Karate.run("pokemon").relativeTo(getClass());
    }

}
