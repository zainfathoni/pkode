{
  description = "Use nodejs-14_x in pkode";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, ... }:
    utils.lib.eachDefaultSystem (system:
      let
        inherit (lib) attrValues;
        pkgs = nixpkgs.legacyPackages.${system};
        lib = nixpkgs.lib;
      in
      rec {
        devShell = with pkgs; mkShell {
          buildInputs = [
            nodejs-14_x
          ];
        };
      });

}
