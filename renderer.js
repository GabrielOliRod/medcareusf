// Array de objetos que representa a lista de medicamentos com informações predefinidas
const medicines = [
  { name: "Losartana", time: "06:30 am", everyday: "Todos os dias", active: true }, // Losartana está ativa
  { name: "Rivotril", time: "08:30 am", everyday: "Todos os dias", active: false }, // Rivotril está inativa
  { name: "Clopidogrel", time: "16:00 pm", everyday: "Todos os dias", active: false }, // Clopidogrel está inativa
  { name: "Dipirona", time: "22:00 pm", everyday: "Todos os dias", active: false } // Dipirona está inativa
];

// Função para renderizar (exibir) a lista de medicamentos na interface do usuário
function renderMedicines() {
  const medicineList = document.getElementById("medicineList"); // Obtém o elemento do DOM onde a lista será renderizada
  medicineList.innerHTML = ""; // Limpa o conteúdo atual da lista para evitar duplicação

  // Percorre cada medicamento no array `medicines`
  medicines.forEach((med, index) => {
    const medicineDiv = document.createElement("div"); // Cria um novo elemento `div` para cada medicamento
    // Define a classe `medicine` e adiciona `active` se o medicamento estiver ativo
    medicineDiv.className = "medicine" + (med.active ? " active" : "");
    
    // Define o conteúdo HTML da `medicineDiv` com nome, horário, frequência e um checkbox para ativação
    medicineDiv.innerHTML = `
      <div class="name">${med.name}</div> <!-- Exibe o nome do medicamento -->
      <div class="time">${med.time}</div> <!-- Exibe o horário do medicamento -->
      <div class="everyday">${med.everyday}</div> <!-- Exibe a frequência do medicamento -->
      <label class="toggle">
        <input type="checkbox" ${med.active ? "checked" : ""} onchange="toggleActive(${index})"> <!-- Checkbox para alternar ativo/inativo -->
      </label>
    `;
    // Adiciona o `medicineDiv` como filho de `medicineList` no DOM
    medicineList.appendChild(medicineDiv);
  });
}

// Função para adicionar um novo medicamento à lista
function addMedicine() {
  const name = prompt("Nome do remédio:"); // Prompt para o usuário digitar o nome do medicamento
  const time = prompt("Horário que deve ser tomado (Ex: 08:30 am):"); // Prompt para o usuário digitar o horário do medicamento
  
  // Verifica se ambos os valores foram preenchidos antes de adicionar o novo medicamento
  if (name && time) {
    // Adiciona um novo objeto medicamento ao array `medicines` com valores padrão
    medicines.push({ name, time, everyday: "Todos os dias", active: false });
    renderMedicines(); // Re-renderiza a lista com o novo medicamento incluído
  }
}

// Função para alternar o estado ativo/inativo de um medicamento específico
function toggleActive(index) {
  // Inverte o valor booleano da propriedade `active` do medicamento no índice fornecido
  medicines[index].active = !medicines[index].active;
  renderMedicines(); // Re-renderiza a lista para refletir a mudança de estado
}

// Evento que dispara quando o conteúdo da página é carregado, inicializando a lista de medicamentos
window.addEventListener('DOMContentLoaded', () => {
  renderMedicines(); // Chama `renderMedicines` para exibir a lista assim que a página carrega
});