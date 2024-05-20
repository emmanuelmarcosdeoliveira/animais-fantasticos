export default function initOperation() {
  const operation = document.querySelector('[data-semana]')

  const diasSemana = operation.dataset.semana.split(',').map(Number)
  const horarioSemana = operation.dataset.horario.split(',').map(Number)

  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  const semanaOpen = diasSemana.indexOf(diaAgora) !== -1
  const horarioOpen =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]
  if (horarioOpen && semanaOpen) {
    operation.classList.add('open')
  }
}
