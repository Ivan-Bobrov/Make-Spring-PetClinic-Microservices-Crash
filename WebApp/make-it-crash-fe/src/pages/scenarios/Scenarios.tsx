import ScenarioUnbalancedCapacities from "./custom/unbalancedCapacities/ScenarioUnbalancedCapacities"
import ScenarioUnboundedResultSetsInit from "./custom/unboundedResultSets/ScenarioUnboundedResultSetsInit"
import ScenarioUnbalancedCapacitiesWithParams from "./custom/unbalancedCapacities/ScenarioUnbalancedCapacitiesWithParams"
import ScenarioUnboundedResultSetsDelete from "./custom/unboundedResultSets/ScenarioUnboundedResultSetsDelete"
import ScenarioUnboundedResultSetsWithParams from "./custom/unboundedResultSets/ScenarioUnboundedResultSetsWithParams"
import {Divider} from '@mui/material';
import RestartServices from "../RestartServices"
import ScenarioIntegrationPoints from "./custom/integrationPoints/ScenarioIntegrationPoints.tsx";

function Scenarios() {
    return (
        <div>
            <div className="mt-2">
                <RestartServices></RestartServices>
            </div>
            <Divider className="mt-3"/>
            <h1 className="fw-bold mt-3">Szenarien</h1>
            <div className="mt-3">
                <h3>Unbalanced Capacities</h3>
                <ul className="list-unstyled mt-3">
                    <li className="mb-3"><ScenarioUnbalancedCapacities title="Make Vets Crash!"
                                                                       text="Der Service wird ausgelastet und reagiert für eine gewisse Zeit nicht mehr."
                                                                       path="vets" duration="20"
                                                                       users="350"></ScenarioUnbalancedCapacities></li>
                    <li className="mb-3"><ScenarioUnbalancedCapacities title="Make Customers Crash!"
                                                                       text="Der Service wird ausgelastet und reagiert für eine gewisse Zeit nicht mehr."
                                                                       path="customers" duration="20"
                                                                       users="850"></ScenarioUnbalancedCapacities></li>
                    <li className="mb-3"><ScenarioUnbalancedCapacities title="Make Vets & Customers Crash!"
                                                                       text="Der Service wird ausgelastet und reagiert für eine gewisse Zeit nicht mehr."
                                                                       path="vets-customers" duration="20"
                                                                       users="350"></ScenarioUnbalancedCapacities></li>
                    <li className="mb-3"><ScenarioUnbalancedCapacities title="Make Owner Information Crash!"
                                                                       text="Der Service wird ausgelastet und reagiert für eine gewisse Zeit nicht mehr. Der Test kann deutlich länger Dauern, als der Ladebalken es anzeigt."
                                                                       path="owners-information" duration="20"
                                                                       users="500"></ScenarioUnbalancedCapacities></li>
                    <li className="mb-3"><ScenarioUnbalancedCapacitiesWithParams
                        title="Szenario mit flexiblen Parametern"
                        text="Wähle in diesem Szenario deine bevorzugten Parameter aus."></ScenarioUnbalancedCapacitiesWithParams>
                    </li>
                </ul>
            </div>
            <Divider className="mt-2"/>
            <div className="mt-2">
                <h3>Unbounded Result Sets</h3>
                <h5>Owners</h5>
                <ul className="list-unstyled mt-3">
                    <li className="mb-3"><ScenarioUnboundedResultSetsInit title="Erstelle 50.000 User!"
                                                                          text="Der Service wird ausgelastet und reagiert für eine gewisse Zeit nicht mehr."
                                                                          path="customer/owners"
                                                                          inserts="50000"></ScenarioUnboundedResultSetsInit>
                    </li>
                    <li className="mb-3"><ScenarioUnboundedResultSetsWithParams
                        title="Szenario mit flexiblen Parametern"
                        text="Wähle in diesem Szenario deine bevorzugten Parameter aus."
                        path="customer/owners"></ScenarioUnboundedResultSetsWithParams></li>
                    <li className="mb-3"><ScenarioUnboundedResultSetsDelete title="Lösche alle User!"
                                                                            text="Achtung: Es werden alle User gelöscht!"
                                                                            path="customer/owners"></ScenarioUnboundedResultSetsDelete>
                    </li>
                </ul>
                <h5>Vets</h5>
                <ul className="list-unstyled mt-3">
                    <li className="mb-3"><ScenarioUnboundedResultSetsInit title="Erstelle 50.000 Vets!"
                                                                          text="Der Service wird ausgelastet und reagiert für eine gewisse Zeit nicht mehr."
                                                                          path="vet/vets"
                                                                          inserts="50000"></ScenarioUnboundedResultSetsInit>
                    </li>
                    <li className="mb-3"><ScenarioUnboundedResultSetsWithParams
                        title="Szenario mit flexiblen Parametern"
                        text="Wähle in diesem Szenario deine bevorzugten Parameter aus."
                        path="vet/vets"></ScenarioUnboundedResultSetsWithParams></li>
                    <li className="mb-3"><ScenarioUnboundedResultSetsDelete title="Lösche alle Vets!"
                                                                            text="Achtung: Es werden alle Vets gelöscht!"
                                                                            path="vet/vets"></ScenarioUnboundedResultSetsDelete>
                    </li>
                </ul>
            </div>
            <Divider className="mt-2"/>
            <div className="mt-2">
                <h3>Integration Points</h3>
                <ul className="list-unstyled mt-3">
                    <li className="mb-3">
                        <ScenarioIntegrationPoints title="Chaos Monkey!" text="Aktiviere und Deaktiviere Chaos Monkey über den Switch."></ScenarioIntegrationPoints>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Scenarios
