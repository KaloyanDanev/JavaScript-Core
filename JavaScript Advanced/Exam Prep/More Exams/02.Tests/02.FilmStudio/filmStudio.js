const expect = require('chai').expect;

class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

describe("Film studio", function(){
   let sampleInstance;
   beforeEach(function () {
    sampleInstance = new FilmStudio('Pesho');
   });

    it('testing constructor studio name', function () {
        expect(sampleInstance.name).to.equal(`Pesho`)
    });
    it('testing constructor films propery', function () {
        expect(sampleInstance.films).to.eql([]);
    });
    it('testing makeMovie filmName', function () {
        let result = sampleInstance.makeMovie('The Avangers',['Thor','Hulk','Iron-Man']);
        expect(result.filmName).to.equal('The Avangers');
    });
    it('testing makeMovie roles', function () {
        let result = sampleInstance.makeMovie('The Avangers',['Thor','Iron-Man']);
        expect(result.filmRoles).to.deep.equal([{role:'Thor', actor:false},{role:'Iron-Man', actor: false}]);
    });
    it('testing makeMovie with few arguments', function () {
         expect(() => sampleInstance.makeMovie(['Thor', 'Iron-Man'])).to.throw('Invalid arguments count');
    });
    it('testing makeMovie with Wrong argument', function () {
         expect(() => sampleInstance.makeMovie(123,['Thor', 'Iron-Man'])).to.throw('Invalid arguments');
    });
    it('testing lookingForProducer', function () {
        sampleInstance.makeMovie('The Avangers',['Thor', 'Iron-Man']);
        expect(() => sampleInstance.lookForProducer('STRING'))
            .to.throw(`STRING do not exist yet, but we need the money...`);
    });
    it('testing lookingForProducer with right arguments', function () {
        sampleInstance.makeMovie('The Avangers',['Thor', 'Iron-Man']);
        const result = sampleInstance.lookForProducer('The Avangers');
        expect(result).to.equals(`Film name: The Avangers\nCast:\nfalse as Thor\nfalse as Iron-Man\n`)
    });
    it('testing makeMovie with right casting', function () {
        sampleInstance.makeMovie('The Avangers',['Thor', 'Iron-Man']);
        const result = sampleInstance.casting('Pesho','Thor');
        expect(result).to.equal('You got the job! Mr. Pesho you are next Thor in the The Avangers. Congratz!')
    });
    it('testing makeMovie with right casting', function () {
        sampleInstance.makeMovie('The Avangers',['Thor', 'Iron-Man']);
        const result = sampleInstance.casting('Pesho','spiderman');
        expect(result).to.equal('Pesho, we cannot find a spiderman role...')
    });
    it('testing casting', function () {
        const result = sampleInstance.casting('Pesho','spiderman');
        expect(result).to.equal('There are no films yet in Pesho.');
    });
});