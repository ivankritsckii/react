
const downloadFile = ( data: string, fileName: string, fileType: string ) => {
  const blob = new Blob([data], { type: fileType })
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
} 

export const exportToCsv = (arrToCSV:{name:string, height:string, mass:string, hair_color:string}[]) => {
  const headers = ['Name','Height','Mass','Hair_color']
  const resArr = []
  for(let i = 1; i < arrToCSV.length; i++) {
    resArr.push([arrToCSV[i].name, arrToCSV[i].height, arrToCSV[i].mass, arrToCSV[i].hair_color])
  }

  downloadFile(
    [headers, ...resArr].join('\n'),
    `${arrToCSV.length - 1}_customers.csv`,
    'text/csv',
  )
}
