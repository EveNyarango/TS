export function dirReduc(arr: string[]): string[] {
    /**
     * String[North,South,East,West]
     * ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
     * Loop through it
     * check no of each direction
     * subtract n = s, e = w 
     * if not equal print the larger count
     * The one with the reminder
     */

    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;

    let newArr: string[] = [];

    for (let i; i < arr.length; i++) {
        switch (arr[i]) {
            case "NORTH":
                north++
                break;

            case "SOUTH":
                south++
                break;

            case "EAST":
                east++
                break;

            case "WEST":
                west++
                break;

            default:
                break;
        }

    }

    if ((south - north) == 0) {

    } else {
        return newArr.push()
    }


    return []
}

function reduceDirection(arr: string[]): string[] {
    const reducedDirections: string[] = []

    for (let direction of arr) {
        let lastVisitedDirection: string | undefined = reducedDirections[reducedDirections.length - 1];

        if (areOpposite(lastVisitedDirection, direction)) {
            reducedDirections.pop();
        } else {
            reducedDirections.push(direction);
        }
    }

    return reducedDirections
}

function areOpposite(direction1: string | undefined, direction2: string | undefined): boolean {

    if (direction1 == "NORTH" && direction2 == "SOUTH" || direction1 == "SOUTH" && direction2 == "NORTH") {
        return true
    } else if (direction1 == "WEST" && direction2 == "EAST" || direction1 == "EAST" && direction2 == "WEST") {
        return true
    }

    return false;
}
