import Sidebar from "../dashboard/components/Sidebar";
export default function NewReport() {
  return (
    <>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <form className="container d-flex w-100">
          <fieldset disabled>
            <legend>Ingresar un Nuevos Registros</legend>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Presupuesto Anual (para planes de sensibilización)
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">
                Monto recaudado del cobro por la recolección de residuos
                residencial
              </label>
              <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Total del monto recaudado por el cobro de recoleccion de
                residuos residencial e industrial
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Presupuesto anual para campañas de conservación de las fuentes
                de captación de agua
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Recursos fiscales generados por
                instituciones de valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Recursos de preasignaciones valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Recursos de crédito internos valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Asistencia técnica y donacionaciones
                valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label class="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>


          <fieldset disabled>
            <legend>Ingresar un Nuevos Registros</legend>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Presupuesto Anual (para planes de sensibilización)
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">
                Monto recaudado del cobro por la recolección de residuos
                residencial
              </label>
              <select id="disabledSelect" class="form-select">
                <option>Disabled select</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Total del monto recaudado por el cobro de recoleccion de
                residuos residencial e industrial
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Presupuesto anual para campañas de conservación de las fuentes
                de captación de agua
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Recursos fiscales generados por
                instituciones de valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Recursos de preasignaciones valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Recursos de crédito internos valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">
                Ingresos provenientes de: Asistencia técnica y donacionaciones
                valor
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  disabled
                />
                <label class="form-check-label" for="disabledFieldsetCheck">
                  Can't check this
                </label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
          
        </form>
      </div>
    </>
  );
}
