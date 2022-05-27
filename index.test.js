const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

describe.each`
  original                       | expected
  // colors
  ${"koloro: nigra"}             | ${"color: black"}
  ${"koloro: arĝento"}           | ${"color: silver"}
  ${"koloro: griza"}             | ${"color: grey"}
  ${"koloro: blanka"}            | ${"color: white"}
  ${"koloro: bruno"}             | ${"color: tan"}
  ${"koloro: ruĝa"}              | ${"color: red"}
  ${"koloro: alicioblua"}        | ${"color: aliceblue"}
  ${"koloro: antikvablanka"}     | ${"color: antiquewhite"}
  ${"koloro: akvo"}              | ${"color: aqua"}
  ${"koloro: akvamarino"}        | ${"color: aquamarine"}
  ${"koloro: lazuro"}            | ${"color: azure"}
  ${"koloro: flavgriza"}         | ${"color: beige"}
  ${"koloro: biskvo"}            | ${"color: bisque"}
  ${"koloro: blankigitamigdalo"} | ${"color: blanchedalmond"}
  ${"koloro: blua"}              | ${"color: blue"}
  ${"koloro: bluvioleto"}        | ${"color: blueviolet"}
  ${"koloro: bruna"}             | ${"color: brown"}
  ${"koloro: burlywood"}         | ${"color: burlywood"}
  ${"koloro: kadetblua"}         | ${"color: cadetblue"}
  ${"koloro: chartreuse"}        | ${"color: chartreuse"}
  ${"koloro: ĉokolado"}          | ${"color: chocolate"}
  ${"koloro: koralo"}            | ${"color: coral"}
  ${"koloro: maizflorblua"}      | ${"color: cornflowerblue"}
  ${"koloro: marizsilko"}        | ${"color: cornsilk"}
  ${"koloro: purpuro"}           | ${"color: crimson"}
  ${"koloro: cejana"}            | ${"color: cyan"}
  ${"koloro: malhelblua"}        | ${"color: darkblue"}
  ${"koloro: malhelciano"}       | ${"color: darkcyan"}
  ${"koloro: mallumoravergo"}    | ${"color: darkgoldenrod"}
  ${"koloro: malhelgriza"}       | ${"color: darkgrey"}
  ${"koloro: malhelaverdo"}      | ${"color: darkgreen"}
  ${"koloro: malhelkaki"}        | ${"color: darkkhaki"}
  ${"koloro: malhelmagenta"}     | ${"color: darkmagenta"}
  ${"koloro: malhelverda"}       | ${"color: darkolivegreen"}
  ${"koloro: mallumorange"}      | ${"color: darkorange"}
  ${"koloro: malhelaorkideo"}    | ${"color: darkorchid"}
  ${"koloro: malhelruĝa"}        | ${"color: darkred"}
  ${"koloro: malhelasalmo"}      | ${"color: darksalmon"}
  ${"koloro: mallumaverda"}      | ${"color: darkseagreen"}
  ${"koloro: malhelardezblua"}   | ${"color: darkslateblue"}
  ${"koloro: malhelardezgriza"}  | ${"color: darkslategrey"}
  ${"koloro: malhelturkiso"}     | ${"color: darkturquoise"}
  ${"koloro: malhelviola"}       | ${"color: darkviolet"}
  ${"koloro: profunderozkolora"} | ${"color: deeppink"}
  ${"koloro: profundeĉiela"}     | ${"color: deepskyblue"}
  ${"koloro: malklara"}          | ${"color: dimgrey"}
  ${"koloro: dodgerblue"}        | ${"color: dodgerblue"}
  ${"koloro: fajrbriko"}         | ${"color: firebrick"}
  ${"koloro: florblanka"}        | ${"color: floralwhite"}
  ${"koloro: arbarverda"}        | ${"color: forestgreen"}
  ${"koloro: fuksio"}            | ${"color: fuchsia"}
  ${"koloro: gainsboro"}         | ${"color: gainsboro"}
  ${"koloro: fantomblankulo"}    | ${"color: ghostwhite"}
  ${"koloro: oro"}               | ${"color: gold"}
  ${"koloro: oravergo"}          | ${"color: goldenrod"}
  ${"koloro: verda"}             | ${"color: green"}
  ${"koloro: verdflava"}         | ${"color: greenyellow"}
  ${"koloro: mielroso"}          | ${"color: honeydew"}
  ${"koloro: varmarozo"}         | ${"color: hotpink"}
  ${"koloro: indianruĝa"}        | ${"color: indianred"}
  ${"koloro: indigo"}            | ${"color: indigo"}
  ${"koloro: eburo"}             | ${"color: ivory"}
  ${"koloro: kakia"}             | ${"color: khaki"}
  ${"koloro: lavendo"}           | ${"color: lavender"}
  ${"koloro: lavendaruĝo"}       | ${"color: lavenderblush"}
  ${"koloro: gazonverda"}        | ${"color: lawngreen"}
  ${"koloro: citronĉifon"}       | ${"color: lemonchiffon"}
  ${"koloro: helblua"}           | ${"color: lightskyblue"}
  ${"koloro: lumkoralo"}         | ${"color: lightcoral"}
  ${"koloro: lumcyan"}           | ${"color: lightcyan"}
  ${"koloro: heloraflava"}       | ${"color: lightgoldenrodyellow"}
  ${"koloro: helgriza"}          | ${"color: lightgrey"}
  ${"koloro: helverda"}          | ${"color: lightgreen"}
  ${"koloro: helroza"}           | ${"color: lightpink"}
  ${"koloro: lumsalmo"}          | ${"color: lightsalmon"}
  ${"koloro: helmarverda"}       | ${"color: lightseagreen"}
  ${"koloro: helardezgriza"}     | ${"color: lightslategrey"}
  ${"koloro: helŝtalobluo"}      | ${"color: lightsteelblue"}
  ${"koloro: helflava"}          | ${"color: lightyellow"}
  ${"koloro: kalko"}             | ${"color: lime"}
  ${"koloro: limeverda"}         | ${"color: limegreen"}
  ${"koloro: lino"}              | ${"color: linen"}
  ${"koloro: magento"}           | ${"color: magenta"}
  ${"koloro: mezakvamarino"}     | ${"color: mediumaquamarine"}
  ${"koloro: mezblua"}           | ${"color: mediumblue"}
  ${"koloro: mezmorkideo"}       | ${"color: mediumorchid"}
  ${"koloro: mezpurpura"}        | ${"color: mediumpurple"}
  ${"koloro: mezamarverda"}      | ${"color: mediumseagreen"}
  ${"koloro: mezaardezblua"}     | ${"color: mediumslateblue"}
  ${"koloro: mezprintempaverda"} | ${"color: mediumspringgreen"}
  ${"koloro: mezturkiso"}        | ${"color: mediumturquoise"}
  ${"koloro: mezvioleta"}        | ${"color: mediumvioletred"}
  ${"koloro: noktoblua"}         | ${"color: midnightblue"}
  ${"koloro: mentokremo"}        | ${"color: mintcream"}
  ${"koloro: mistirozo"}         | ${"color: mistyrose"}
  ${"koloro: mokasino"}          | ${"color: moccasin"}
  ${"koloro: navajoblanka"}      | ${"color: navajowhite"}
  ${"koloro: mararmeo"}          | ${"color: navy"}
  ${"koloro: maljunalaĉo"}       | ${"color: oldlace"}
  ${"koloro: olivo"}             | ${"color: olive"}
  ${"koloro: olivedrab"}         | ${"color: olivedrab"}
  ${"koloro: oranĝa"}            | ${"color: orange"}
  ${"koloro: oranĝruĝa"}         | ${"color: orangered"}
  ${"koloro: orkideo"}           | ${"color: orchid"}
  ${"koloro: palegavergo"}       | ${"color: palegoldenrod"}
  ${"koloro: palverda"}          | ${"color: palegreen"}
  ${"koloro: palturkiso"}        | ${"color: paleturquoise"}
  ${"koloro: paleviolruĝa"}      | ${"color: palevioletred"}
  ${"koloro: papavipo"}          | ${"color: papayawhip"}
  ${"koloro: persikulo"}         | ${"color: peachpuff"}
  ${"koloro: Peruo"}             | ${"color: peru"}
  ${"koloro: rozkolora"}         | ${"color: pink"}
  ${"koloro: pruno"}             | ${"color: plum"}
  ${"koloro: pulvorblua"}        | ${"color: powderblue"}
  ${"koloro: purpura"}           | ${"color: purple"}
  ${"koloro: rozbruna"}          | ${"color: rosybrown"}
  ${"koloro: reĝabluo"}          | ${"color: royalblue"}
  ${"koloro: selbruna"}          | ${"color: saddlebrown"}
  ${"koloro: salmo"}             | ${"color: salmon"}
  ${"koloro: sablobruna"}        | ${"color: sandybrown"}
  ${"koloro: marverda"}          | ${"color: seagreen"}
  ${"koloro: konko"}             | ${"color: seashell"}
  ${"koloro: sieno"}             | ${"color: sienna"}
  ${"koloro: ĉielblua"}          | ${"color: skyblue"}
  ${"koloro: ardezblua"}         | ${"color: slateblue"}
  ${"koloro: ardezgrizo"}        | ${"color: slategrey"}
  ${"koloro: neĝo"}              | ${"color: snow"}
  ${"koloro: printempverdo"}     | ${"color: springgreen"}
  ${"koloro: ŝtalblua"}          | ${"color: steelblue"}
  ${"koloro: kreketo"}           | ${"color: teal"}
  ${"koloro: kardo"}             | ${"color: thistle"}
  ${"koloro: tomato"}            | ${"color: tomato"}
  ${"koloro: turkiso"}           | ${"color: turquoise"}
  ${"koloro: viola"}             | ${"color: violet"}
  ${"koloro: tritiko"}           | ${"color: wheat"}
  ${"koloro: blankafumo"}        | ${"color: whitesmoke"}
  ${"koloro: flava"}             | ${"color: yellow"}
  ${"koloro: flavverda"}         | ${"color: yellowgreen"}
`("$original should be translated to $expected", ({ original, expected }) => {
  it("translates property names", async () => {
    await run(`a{ ${original.trim()}; }`, `a{ ${expected.trim()}; }`);
  });
});
