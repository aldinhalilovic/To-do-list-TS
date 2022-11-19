import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productAction } from "../../store/productslice";
import { Button, Checkbox, Collapse, ScrollArea } from "@mantine/core";

function FinalCard({ el }) {
  const [serviceCol, setServiceCol] = useState(false);
  const [exteriorCol, setExteriorCol] = useState(false);
  const [interiorCol, setInteriorCol] = useState(false);
  const dispatch = useDispatch();
  const bonus = (id, extra) =>
    dispatch(productAction.addBill({ id, value: extra }));
  const minus = (id, extra) =>
    dispatch(productAction.removeBill({ id, value: extra }));
  const finalPrice = Number(el.price) + Number(el.addionalExpenses);

  return (
    <div
      style={{
        width: "300px",
        minHeight: "500px",
        border: "2px solid #ccc",
        marginLeft: "10px",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "280px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={el.image} alt={el.model} style={{ maxHeight: "230px" }} />
        <div
          style={{
            width: "100px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <h3>{el.model}</h3>
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <div
          style={{
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Custom services</h3>
        </div>
        <div>
          <Button.Group orientation="vertical">
            <Button
              variant={serviceCol ? "filled" : "outline"}
              onClick={() => {
                setServiceCol((prev) => !prev);
                setInteriorCol(false);
                setExteriorCol(false);
              }}
            >
              Services
            </Button>
            <Collapse in={serviceCol}>
              <ScrollArea
                style={{
                  height: "100px",
                  padding: "10px",
                }}
              >
                <Checkbox
                  label="Vehicle Inspection (100€)"
                  value={100}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Minor Service (190€)"
                  value={190}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Major Service (360€)"
                  value={360}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
              </ScrollArea>
            </Collapse>

            <Button
              variant={exteriorCol ? "filled" : "outline"}
              onClick={() => {
                setServiceCol(false);
                setInteriorCol(false);
                setExteriorCol((prev) => !prev);
              }}
            >
              {" "}
              Exterior
            </Button>
            <Collapse in={exteriorCol}>
              <ScrollArea
                style={{
                  height: "100px",
                  padding: "10px",
                }}
              >
                <Checkbox
                  label="Winter/Summer Tyres (200€)"
                  value={200}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Extra Rims (250€)"
                  value={250}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Full Polishing (200€)"
                  value={200}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Windows Tinting (120€)"
                  value={120}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Xenon Headlights (40€)"
                  value={40}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
              </ScrollArea>
            </Collapse>
            <Button
              variant={interiorCol ? "filled" : "outline"}
              onClick={() => {
                setServiceCol(false);
                setInteriorCol((prev) => !prev);
                setExteriorCol(false);
              }}
            >
              Interior
            </Button>
            <Collapse in={interiorCol}>
              <ScrollArea
                style={{
                  height: "100px",
                  padding: "10px",
                }}
              >
                <Checkbox
                  label="Interior Styling (80€)"
                  value={80}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Seat Protections (40€)"
                  value={40}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Led Interior Light (40€)"
                  value={40}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
                <Checkbox
                  label="Extra Floor Mats (30€)"
                  value={30}
                  onClick={(e) =>
                    e.target.checked
                      ? bonus(el.id, e.target.value)
                      : minus(el.id, e.target.value)
                  }
                />
              </ScrollArea>
            </Collapse>
          </Button.Group>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Starting price : {Number(el.price).toLocaleString()}€</h3>
          <h3>{finalPrice.toLocaleString()}€</h3>
        </div>
      </div>
    </div>
  );
}

export default FinalCard;
