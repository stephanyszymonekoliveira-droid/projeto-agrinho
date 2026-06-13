function converterSensi() {
    const sensiAtual = parseFloat(document.getElementById('sensi-atual').value);
    
    if (isNaN(sensiAtual) || sensiAtual <= 0) {
        alert("Por favor, digite uma sensibilidade válida!");
        return;
    }

    // Cálculos base aproximados de conversão de sensibilidade
    const sensiStandoff = (sensiAtual * 1.0).toFixed(2); 
    const sensiFreeFire = (sensiAtual * 15.5).toFixed(0); // Escala do FF vai até 100 geralmente

    // Atualiza os valores na tela
    document.getElementById('res-standoff').innerText = sensiStandoff;
    document.getElementById('res-ff').innerText = sensiFreeFire;

    // Mostra a caixinha de resultado
    document.getElementById('resultado').style.display = 'block';
}
