function evaluatePolicy() {

    let subscriber =
        document.getElementById("subscriber").value;

    let slice =
        document.getElementById("slice").value;

    let usage =
        Number(document.getElementById("usage").value);

    let roaming =
        document.getElementById("roaming").value;

    let qos = "";
    let throttle = "No";
    let priority = "";
    let roamingCharge = "";

    if(subscriber === "Gold"){
        qos = "High";
        priority = "Premium";

        if(usage > 80){
            throttle = "Yes";
        }
    }

    if(subscriber === "Silver"){
        qos = "Medium";
        priority = "Standard";

        if(usage > 50){
            throttle = "Yes";
        }
    }

    if(subscriber === "Bronze"){
        qos = "Low";
        priority = "Best Effort";

        if(usage > 20){
            throttle = "Yes";
        }
    }

    roamingCharge =
        roaming === "Yes"
        ? "Enabled"
        : "Disabled";

    let throttleClass =
        throttle === "Yes"
        ? "status-red"
        : "status-green";

    document.getElementById("result").innerHTML = `
    
    <div class="policy-card">

        <h2>Policy Decision Result</h2>

        <table>

            <tr>
                <td>Policy Function</td>
                <td>PCF</td>
            </tr>

            <tr>
                <td>Subscriber Tier</td>
                <td>${subscriber}</td>
            </tr>

            <tr>
                <td>Network Slice</td>
                <td>${slice}</td>
            </tr>

            <tr>
                <td>QoS Profile</td>
                <td>${qos}</td>
            </tr>

            <tr>
                <td>Priority Level</td>
                <td>${priority}</td>
            </tr>

            <tr>
                <td>Throttle Required</td>
                <td class="${throttleClass}">
                    ${throttle}
                </td>
            </tr>

            <tr>
                <td>Roaming Charges</td>
                <td>${roamingCharge}</td>
            </tr>

            <tr>
                <td>Monthly Usage</td>
                <td>${usage} GB</td>
            </tr>

        </table>

    </div>
    `;
}